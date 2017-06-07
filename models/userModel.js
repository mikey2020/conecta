const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
mongoose.Promise = global.Promise;

const nodemailer = require('nodemailer');

const UserSchema = new Schema({
	firstname: String,
	lastname: String,
	username: {
		type: String,
		unique: true,
		required: true 
	},
	email: {
		type: String,
		match: [/.+\@.+\..+/ , "please enter valid email address"],
		unique: true,
		required: true
	},
	picture: {
		type: String
	},
	password: {
		type: String,
		required: [true , "must have password"],
		minlength: 6
	},

	salt: String ,

	connections: [],

}, {
	timestamps: { createdAt: 'created_at' }
});

UserSchema.methods.hashPassword = function(password){
	let hashedPassword  = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512');
	hashedPassword = hashedPassword.toString('hex');
	console.log(hashedPassword.toString('hex')); 
	return hashedPassword;
	
};

UserSchema.methods.authenticate =function(pass){
	if(this.password == this.hashPassword(pass)){
		return true;
	}

};

UserSchema.pre('save' , function(next){
	console.log("process is running ");
	if(this.password && this.connections == 0 ){
		this.salt = crypto.randomBytes(16);
		this.password = this.hashPassword(this.password);

	}
	
	next();
});

UserSchema.virtual('fullname').get(function(){
	return this.firstname + " " + this.lastname ;
});

UserSchema.post('save' , function(next){
	console.log("process is done ");
	console.log("user added succesfully");
	/*const transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'superdafe@gmail.com',
	    pass: 'odafe2020'
	  }
	});

	const mailOptions = {
	  from: 'superdafe@gmail.com',
	  to: this.email,
	  subject: 'Welcome to Conecta',
	  text: 'Get started by searching for connections on your home page'
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } 
	  else {
	    console.log('Email sent: ' + info.response);
	  }
	});*/
});

mongoose.model('User',UserSchema);

UserSchema.set('toJSON', { getters: true, virtuals: true });  

