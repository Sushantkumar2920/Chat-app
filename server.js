// server.js
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function(socket) {
    console.log('New connection: ' + socket.id);

    socket.on('chatMessage', function(data) {
        io.sockets.emit('chatMessage', data);
    });
});
