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
			const msg = new Message({message: data , users: [sender,receiver] , sentBy: sender});
			msg.save((err)=>{
				if(err){
					console.log(err);
				}
				else{
					console.log(msg);
				}
			});
			/*const transporter = nodemailer.createTransport({
			  service: 'gmail',
			  auth: {
			    user: 'superdafe@gmail.com',
			    pass: 'odafe2020'
			  }
			});

			const mailOptions = {
			  from: 'superdafe@gmail.com',
			  to: req.body.email,
			  subject: senderll  ,
			  text: 'Get started by logging in'
			};

			transporter.sendMail(mailOptions, function(error, info){
			  if (error) {
			    console.log(error);
			  } 
			  else {
			    console.log('Email sent: ' + info.response);
			  }
			});*/
			io.emit('display',data,sender);
		});


	});
}