/**
 * SERVER B
 */
// 1. Constants and Requires
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const socketClient = require('socket.io-client');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const { SERVER_A } = require('./config/config');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const socketToA = socketClient(SERVER_A);

// TEST : SEE THE IP OF SERVER A
console.log(SERVER_A);

io.on('connection', (socket) => {
    console.log('A client connected to Server B');
    
    socket.on('message_from_a', (data) => {
        console.log('Received:', data);
    });
    
    socket.on('disconnect', () => {
        console.log('A client disconnected from Server B');
    });
});

// Client capabilities
socketToA.on('connect', () => {
    console.log('Server B connected to Server A as a client');

    socketToA.emit('message_from_b', 'Hello Server A from Server B!');
});

socketToA.on('message_from_a', (data) => {
    console.log('Received from Server A:', data);
});

server.listen(4000, () => {
    console.log('Server B listening on *:4000');
});
