const WebSocket = require('ws');
const server = new WebSocket.Server({
    port: 3000
});

let sockets = [];

server.on('connection', function(socket) {

    sockets.push(socket);

    socket.on('message', function(msg) {
        console.log(`Mensagem enviada por cliente: ${msg}`)

        sockets.forEach(s => s.send(`${msg}`));
    });

    socket.on('close', function() {
        sockets = sockets.filter(s => s !== socket);
    });
});

console.log('Servidor WS funcionando !!!');
