const User = require('mongoose').model('User');

exports.renderSignUp = (req,res)=> {
	res.render('signup',{

	});
}

exports.SignUp = (req,res) => {
	let user = new User(req.body);

		user.save(function(err){
			if(err){
				var message = getErrorMessage(err);
				req.flash('error',message);
				res.redirect('/signup');
			}
			else{
				console.log(user);
				var prompt = "Please sign in  here";
				req.flash('info',prompt);
				res.redirect('/signin');
			}
		});
}

exports.renderLogIn = (req,res) => {
	if(!req.user){
		res.render('signin',{
			messages: req.flash('error') || req.flash('info')
		});
	}

	else{
		res.redirect('/');
	}
}


