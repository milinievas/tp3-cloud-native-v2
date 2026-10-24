const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Dentro de Docker, el hostname del sistema es el ID corto del contenedor.
// Lo devolvemos para poder ver qué réplica atendió cada petición.
const HOSTNAME = os.hostname();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API del TP3 - Arquitectura Cloud-Native',
    estado: 'funcionando',
    hostname: HOSTNAME
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    estado: 'OK',
    hostname: HOSTNAME
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API escuchando en el puerto ${PORT} (host: ${HOSTNAME})`);
});
