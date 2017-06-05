
const User = require('mongoose').model('User');
require('../models/msgModel');
const Message = require('mongoose').model('message');

const user = require('../controllers/userController');
//const multer = require('multer');
//const uploads = multer({ dest: 'uploads/'});
const passport = require('passport');
const fs = require('fs');

//const cloudinary = require('cloudinary');


/*cloudinary.config({ 
  cloud_name: 'photo-editor', 
  api_key: '169757236964799', 
  api_secret: 'KYDwlwNwlzCc7fcqeCtz0BqEbcQ' 
});*/


require('../local');



module.exports = (app) => {
	app.get('/signup',user.renderSignUp);

	app.post('/signup', user.SignUp);


	/*app.post('/upload',uploads.single('image'),(req,res) =>{
		if(req.file && req.session.username){
			console.log(req.file.filename);
			fs.renameSync("uploads/"+req.file.filename ,"uploads/"+req.file.originalname);
			cloudinary.uploader.upload("uploads/"+req.file.originalname, function(result){ 
			  console.log(result);
			  let image = new Photo({"username":req.session.username , "photo":result.url});
			  image.save(function(err){
			  	if(err){
			  		console.log(err);
			  		res.redirect('/edit');
			  	}
			  	else{
			  		console.log(image);
			  		res.redirect('/');
			  	}

			  })
			}); 
		}
	});*/

	app.get('/login',user.renderLogIn);
	
	app.post('/login', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
	);


	app.get('/logout',(req,res) => {
		req.logout();
		res.redirect('/login');
	});

	app.post('/search', (req,res) => {
		console.log(req.body);
		User.find({ 'username': req.body.query}, function (err, user) {
		  if (err) {
		  	console.log(err);
		  	res.redirect('/');
		  }
		 
		  else if(user === null){
		  	console.log("user doesnt exidst");
		  	res.json({'message':'doesnt exist'});
		  	
		  	
		  }
		   
		  else{
		     console.log(user);
		     res.json(user);
		   }
		  //req.session.results = user;
		  //res.redirect('/');
		  /*res.render('index',{
				name: req.user.username,
				results: req.session.results
		  });*/
		})
	});

	app.get('/chat/:name',(req,res) => {
		console.log("am working");
		if(!req.user){
			res.redirect('/login');
		}
		else{
			Message.find({'sentBy': req.user.username , 'sentTo': name},(err,msg)=>{
				console.log(msg);
				if(err){
					console.log(err);
				}
				else{
					
					console.log(name);
					
					res.render('chat-page',{
						username: req.user.username,
						name: name,
						msg: msg
					});
					
				}
		    })

		}
		
		
		
	});

	app.param("name",(req,res,next) => {
		name = req.params.name ;
		next(); 
	});

}; 