import express from 'express';
import cors from 'cors';
import traceRouter from './routes/trace.js';
import analyzeRouter from './routes/analyze.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api', traceRouter);
app.use('/api', analyzeRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  if (process.env.ANTHROPIC_API_KEY) {
    console.log('✅ Anthropic API key found');
  } else {
    console.log('⚠️  No ANTHROPIC_API_KEY set — Claude analysis will require client-side key');
  }
});
