// 1. Constants and Requires
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Server A connected');
    
    socket.on('message_from_a', (data) => {
        console.log('Received:', data);
    });
    
    socket.on('disconnect', () => {
        console.log('Server A disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server B listening on *:4000');
});
