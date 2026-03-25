/**
 * Claude API Vision analysis — identifies parts and generates replacement SVG for low-detail elements.
 */

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-20250514';

/**
 * Analyze an image to identify parts for SVG component creation.
 * @param {string} imageBase64 - raw base64 of original photo
 * @param {string} mediaType - MIME type (e.g., 'image/png')
 * @param {string|null} apiKey - Anthropic API key (null = use server proxy)
 * @returns {Promise<Array>} Parts manifest
 */
export async function analyzeImage(imageBase64, mediaType, apiKey = null) {
  const systemPrompt = `You are an industrial equipment SVG component engineer. You analyze photographs of industrial instruments and equipment to identify their parts for creating interactive SVG components.`;

  const userContent = [
    {
      type: 'image',
      source: {
        type: 'base64',
        media_type: mediaType,
        data: imageBase64,
      },
    },
    {
      type: 'text',
      text: `I have a photograph of industrial equipment and I need to create an interactive SVG component from it.

Analyze this image and identify every distinct functional part. For each part, provide:

1. "name" — descriptive identifier (e.g., "terminal_screw_positive", "lcd_display", "conduit_hub_left", "ground_symbol")
2. "type" — category: "structural", "terminal", "display", "fastener", "label", "connector", "indicator"
3. "bbox" — approximate bounding box as percentage of image dimensions: {"x": 0-100, "y": 0-100, "w": 0-100, "h": 0-100}
4. "description" — what it looks like and what it does
5. "interactive" — boolean, whether a user might need to click/drag to/from this element
6. "dynamic" — boolean, whether this element changes based on a prop (e.g., LCD reading changes, liquid level changes)
7. "detail_quality" — "high", "medium", "low" — how well a simple auto-tracer would capture this element (screws = low, large colored regions = high)

Respond with ONLY a JSON array. No markdown, no explanation.`,
    },
  ];

  const body = {
    model: MODEL,
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: 'user', content: userContent }],
  };

  const json = await callClaude(body, apiKey);
  const text = json.content[0].text;

  try {
    return JSON.parse(text);
  } catch {
    // Try to extract JSON array from the response
    const match = text.match(/\[[\s\S]*\]/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Failed to parse parts manifest from Claude response');
  }
}

/**
 * Generate replacement SVG for a low-detail part.
 * @param {string} imageBase64 - raw base64 of original photo
 * @param {string} mediaType - MIME type
 * @param {object} part - part from the manifest
 * @param {string|null} apiKey
 * @returns {Promise<string>} SVG <g> element string
 */
export async function generateReplacement(imageBase64, mediaType, part, apiKey = null) {
  const userContent = [
    {
      type: 'image',
      source: {
        type: 'base64',
        media_type: mediaType,
        data: imageBase64,
      },
    },
    {
      type: 'text',
      text: `This is a photograph containing a "${part.name}" (${part.description}) from an industrial instrument. The element is located at approximately x:${part.bbox.x}%, y:${part.bbox.y}%, width:${part.bbox.w}%, height:${part.bbox.h}% of the image.

An auto-tracer produced a blobby, low-detail version of this element.

Write clean SVG code for JUST this element. Requirements:
- Use proper geometric shapes (circles for screws, rects for terminals)
- Use realistic colors sampled from the photo
- Include appropriate detail (cross-hatch on screws, slot lines, text labels)
- Output should be a single <g> element with id="${part.name}"
- Coordinate space: use a viewBox that matches the bounding box dimensions proportionally
- Keep it compact — under 20 SVG elements for this part

Respond with ONLY the SVG <g> element. No markdown fences, no explanation.`,
    },
  ];

  const body = {
    model: MODEL,
    max_tokens: 2048,
    messages: [{ role: 'user', content: userContent }],
  };

  const json = await callClaude(body, apiKey);
  let svgText = json.content[0].text.trim();

  // Strip markdown fences if present
  svgText = svgText.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();

  return svgText;
}

/**
 * Refine a specific part based on user feedback.
 * @param {string} imageBase64 - raw base64 of original photo
 * @param {string} mediaType - MIME type
 * @param {string} currentSvgSnippet - current SVG for the part
 * @param {number} clickX - click X position as percentage
 * @param {number} clickY - click Y position as percentage
 * @param {string} userFeedback - user's description of the problem
 * @param {string|null} apiKey
 * @returns {Promise<string>} Replacement SVG <g> element
 */
export async function refinePart(imageBase64, mediaType, currentSvgSnippet, clickX, clickY, userFeedback, apiKey = null) {
  const userContent = [
    {
      type: 'image',
      source: {
        type: 'base64',
        media_type: mediaType,
        data: imageBase64,
      },
    },
    {
      type: 'text',
      text: `The user clicked on a region at approximately (${clickX.toFixed(1)}%, ${clickY.toFixed(1)}%) of the SVG and said: "${userFeedback}"

The part in that region is currently:
${currentSvgSnippet}

Regenerate the SVG for this specific part, addressing the user's feedback. Keep the same coordinate space and group id. Respond with ONLY the replacement <g> element. No markdown fences, no explanation.`,
    },
  ];

  const body = {
    model: MODEL,
    max_tokens: 2048,
    messages: [{ role: 'user', content: userContent }],
  };

  const json = await callClaude(body, apiKey);
  let svgText = json.content[0].text.trim();
  svgText = svgText.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();
  return svgText;
}

/**
 * Call Claude API — via server proxy or directly.
 */
async function callClaude(body, apiKey, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      let res;
      if (apiKey) {
        // Direct API call
        res = await fetch(ANTHROPIC_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify(body),
        });
      } else {
        // Server proxy
        res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      }

      if (res.status === 429 && attempt < retries) {
        const wait = Math.pow(2, attempt + 1) * 1000;
        console.log(`⏳ Rate limited, retrying in ${wait / 1000}s...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Claude API error ${res.status}: ${errText}`);
      }

      return await res.json();
    } catch (err) {
      if (attempt === retries) throw err;
      const wait = Math.pow(2, attempt + 1) * 1000;
      console.log(`⏳ Request failed, retrying in ${wait / 1000}s...`);
      await new Promise(r => setTimeout(r, wait));
    }
  }
}
