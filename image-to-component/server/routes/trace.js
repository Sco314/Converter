import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

let vectorize = null;
let vectorizerAvailable = false;

// Try loading @neplex/vectorizer (native Node.js binding)
try {
  const mod = await import('@neplex/vectorizer');
  vectorize = mod.vectorize || mod.default?.vectorize;
  if (vectorize) {
    vectorizerAvailable = true;
    console.log('✅ @neplex/vectorizer loaded');
  }
} catch (err) {
  console.log('⚠️  @neplex/vectorizer not available:', err.message);
}

router.post('/trace', upload.single('image'), async (req, res) => {
  if (!vectorizerAvailable) {
    return res.status(503).json({
      error: 'Server-side VTracer not available. Use browser WASM fallback.',
    });
  }

  try {
    const imageBuffer = req.file?.buffer;
    if (!imageBuffer) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    let options = {};
    try {
      options = JSON.parse(req.body?.options || '{}');
    } catch {
      // Use defaults
    }

    const svg = await vectorize(imageBuffer, {
      colorMode: options.colorMode === 'color' ? 0 : 1, // ColorMode enum
      hierarchical: options.hierarchical === 'stacked' ? 0 : 1, // Hierarchical enum
      mode: 0, // PathSimplifyMode.Spline
      filterSpeckle: options.filterSpeckle ?? 4,
      colorPrecision: options.colorPrecision ?? 8,
      layerDifference: options.layerDifference ?? 16,
      cornerThreshold: options.cornerThreshold ?? 60,
      lengthThreshold: options.lengthThreshold ?? 4.0,
      maxIterations: options.maxIterations ?? 10,
      spliceThreshold: options.spliceThreshold ?? 45,
      pathPrecision: options.pathPrecision ?? 3,
    });

    console.log('✅ Trace complete, SVG size:', svg.length, 'bytes');
    res.json({ svg });
  } catch (err) {
    console.log('❌ Trace error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
