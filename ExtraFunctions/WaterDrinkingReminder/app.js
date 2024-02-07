const http = require('http');

const PORT = 8080;

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar la respuesta para la ruta principal
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Recuerda tomar agua regularmente.');
  } else {
    // Si la ruta no es la principal, responder con un código de estado 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

// Escuchar en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
