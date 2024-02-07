const express = require('express');
const app = express();

const PORT = 8080;

// Ruta principal que muestra el mensaje recordando tomar agua
app.get('/', (req, res) => {
    res.send('Recuerda tomar agua regularmente.');
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});