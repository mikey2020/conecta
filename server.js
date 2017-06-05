require('dotenv').config();

const app = require('./app');

const port = process.env.PORT ;

const http = require('http').Server(app);

const io = require('socket.io')(http);

require('./chat.js')(io);

const server = http.listen(port,()=>{
	console.log("Server listening on port 3000");
});