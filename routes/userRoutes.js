
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

const checkValue = (val,list) => {
	for(let v in  list){
		if(list[v] == val){
			return true;
		}
		else{
			return false;
		}
	}
}

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
		if(!req.user){
			res.redirect('/login');
		}
		else{
			User.findById(req.user.id,(err,user) => {
				/*User.findOne({"username": name},(error,user1) => {
					if(error) throw error;
					console.log("finding other user");
					console.log(user1);
					user.connections.push([user1.username,user1.firstname,user1.lastname]);""
				})*/
				
				if(checkValue(name,user.connections) == true){
					console.log("already connected with " + name);
				}
				else{
					user.connections.push(name);
					user.save((err,updatedUser) => {
						if(err){
							console.log(err);
						}
						else{
							console.log(updatedUser);
						}
					});
				}


				
			});
			let values = [req.user.username,name] ;
			console.log(values);
			values.sort();
			console.log(values);
			Message.find({'users': values},(err,msg)=>{
				console.log(msg);
				if(err){
					console.log(err);
				}
				else{
					
					console.log(name);
					
					res.render('chat-page',{
						username: req.user.username,
						name: name,
						msg: msg,
						user: req.user
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