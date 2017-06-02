
const user = require('./userController');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/'});
const passport = require('passport');
const fs = require('fs');

const cloudinary = require('cloudinary');


cloudinary.config({ 
  cloud_name: 'photo-editor', 
  api_key: '169757236964799', 
  api_secret: 'KYDwlwNwlzCc7fcqeCtz0BqEbcQ' 
});


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

	app.get('/signin',user.renderLogIn);
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);


	app.get('/logout',(req,res) => {
		req.logout();
		res.redirect('/signin');
	})
};