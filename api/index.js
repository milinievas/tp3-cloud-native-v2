
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API del TP3 - Arquitectura Cloud-Native',
    estado: ' funcionando'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    estado: 'OK'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
