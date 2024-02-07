const http = require('http');
const moment = require('moment');

function obtenerSaludo() {
    const hora = moment().hour();
    let saludo = '';

    if (hora >= 5 && hora < 12) {
        saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
        saludo = '¡Buenas tardes!';
    } else {
        saludo = '¡Buenas noches!';
    }

    return saludo;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Fecha actual: ${moment().format('DD-MM-YYYY')}\n`);
    res.end(obtenerSaludo());
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
