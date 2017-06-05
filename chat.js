require('./models/msgModel');
const Message = require('mongoose').model('message');

module.exports = (io) => {
	io.on('connection',(socket) => {
		console.log("user connected");

		socket.on('disconnect',() =>{
			console.log("user is disconnected");
		});

		socket.on('chat-message',(data,sender,receiver) => {
			console.log(data);
			const msg = new Message({message: data , sentBy: sender , sentTo: receiver});
			msg.save((err)=>{
				if(err){
					console.log(err);
				}
				else{
					console.log(msg);
				}
			});
			io.emit('display',data);
		});


	});
}