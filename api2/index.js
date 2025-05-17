import express from 'express';
import { analyzeMatrices } from './utils/matrixUtils.js';

const app = express();
app.use(express.json());

app.post('/process', (req, res) => {
  try {
    const { Q, R } = req.body;

    if (!Q || !R || !Array.isArray(Q) || !Array.isArray(R)) {
      return res.status(400).json({ error: 'Matrices Q y R inválidas' });
    }

    const stats = analyzeMatrices(Q, R);
    res.json(stats);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar las matrices' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Prueba API2. API 2 escuchando en puerto ${PORT}`);
});

export default app;
