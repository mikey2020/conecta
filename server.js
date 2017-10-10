import http from 'http';
import socketio from 'socket.io';

require('dotenv').config();

const app = require('./app');

const httpServer = http.Server(app);
const io = socketio(httpServer);
const port = process.env.PORT;

console.log(process.env.DB_URL);

io.on('connection', (socket) => {
  socket.on('my other event', (data) => {
    console.log(data);
  });
  socket.on('connection', () => {
    console.log('woah am connected');
  });
});

httpServer.listen(port, () => {
  console.log('Server listening on port 3000');
});
