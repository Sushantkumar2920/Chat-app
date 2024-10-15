// app.js
const socket = io.connect('http://localhost:3000');

const output = document.getElementById('output');
const message = document.getElementById('message');

function sendMessage() {
    socket.emit('chatMessage', {
        message: message.value
    });
    message.value = '';
}

socket.on('chatMessage', function(data) {
    output.innerHTML += `<p>${data.message}</p>`;
});
