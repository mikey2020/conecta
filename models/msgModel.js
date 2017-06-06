const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
mongoose.Promise = global.Promise;

const messageSchema  = new Schema({
	message: {
		type: String,
		required: true ,
		trim: true
	},

	users: [],

	sentBy: {
		type: String,
		required: true
	},

	sentOn: {
		type: Date ,
		default: new Date()
	}


});

messageSchema.pre('save' , function(next){
	console.log("process is running ");
	this.users.sort();
	next();
});

messageSchema.post('save' , function(next){
	console.log("process is done ");
	console.log("message saved succesfully");
	
});


module.exports = mongoose.model('message',messageSchema);
