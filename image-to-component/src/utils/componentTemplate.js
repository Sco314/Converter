/**
 * React component string template generator.
 */

/**
 * Generate a React component file from SVG content and parts manifest.
 * @param {string} svgContent - JSX-converted SVG inner content
 * @param {Array} manifest - parts manifest
 * @param {string} componentName - PascalCase component name
 * @param {string} viewBox - SVG viewBox string
 * @returns {string} complete React component file content
 */
export function generateComponentCode(svgContent, manifest, componentName, viewBox) {
  const dynamicParts = manifest.filter(p => p.dynamic);
  const interactiveParts = manifest.filter(p => p.interactive);

  // Build props list
  const props = [
    'x = 0',
    'y = 0',
    'scale = 1',
  ];

  dynamicParts.forEach(p => {
    props.push(`${sanitizePropName(p.name)}_value = ""`);
  });

  if (interactiveParts.length) {
    props.push('onPartClick = () => {}');
  }

  // Build click handlers for interactive parts
  let clickHandlers = '';
  if (interactiveParts.length) {
    clickHandlers = `
  const handleClick = (e) => {
    const group = e.target.closest('[data-interactive="true"]');
    if (group) {
      onPartClick(group.id, e);
    }
  };`;
  }

  // Build dynamic value injection comments
  let dynamicComments = '';
  if (dynamicParts.length) {
    dynamicComments = `\n  // Dynamic parts: ${dynamicParts.map(p => p.name).join(', ')}`;
    dynamicComments += '\n  // Use the _value props to update these elements dynamically';
  }

  const svgProps = interactiveParts.length
    ? `onClick={handleClick} style={{ cursor: "pointer" }}`
    : '';

  return `import React from "react";

/**
 * ${componentName} — auto-generated SVG component
 *
 * Parts: ${manifest.map(p => p.name).join(', ')}
 * Interactive: ${interactiveParts.map(p => p.name).join(', ') || 'none'}
 * Dynamic: ${dynamicParts.map(p => p.name).join(', ') || 'none'}
 */
export function ${componentName}({
  ${props.join(',\n  ')},
}) {${clickHandlers}${dynamicComments}

  return (
    <g transform={\`translate(\${x}, \${y}) scale(\${scale})\`}>
      <svg viewBox="${viewBox}" ${svgProps}>
        ${indentContent(svgContent, 8)}
      </svg>
    </g>
  );
}

export default ${componentName};
`;
}

/**
 * Sanitize a part name for use as a JS prop name.
 */
function sanitizePropName(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, '_');
}

/**
 * Indent multi-line content by a given number of spaces.
 */
function indentContent(content, spaces) {
  const indent = ' '.repeat(spaces);
  return content
    .split('\n')
    .map((line, i) => (i === 0 ? line : indent + line))
    .join('\n');
}
