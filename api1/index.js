import express from 'express';
import { processMatrix } from './utils/matrixUtils.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/matrix', async (req, res) => {
  try {
    const { matrix } = req.body;

    if (!matrix || !Array.isArray(matrix)) {
      return res.status(400).json({ error: 'Matriz inválida' });
    }
    const result = await processMatrix(matrix);
    res.json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la matriz' });
  }
});

app.get('/token', async (req, res) => {
  try {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const response = await axios.post(
      'https://us-east-2qhpn7vpq3.auth.us-east-2.amazoncognito.com/oauth2/token',
      'grant_type=client_credentials&scope=default-m2m-resource-server-xhttft/read',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${auth}`
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error obteniendo token' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Prueba API1. API 1 escuchando en puerto ${PORT}`);
});

export default app
