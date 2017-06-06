const User = require('mongoose').model('User');


const getErrorMessage = function(err) {  
  let message = '';
  if (err.code) {    
    switch (err.code) {      
      case 11000:
      message = "Email has  been used"   ;
      break;   
      case 11001:        
      message = 'Username already exists';        
      break;      
      default:       
      message = 'Something went wrong';    
    }  
  } 
  else {    
    for (var errName in err.errors) {      
      if (err.errors[errName].message) 
        message = err.errors[errName]. message;    
    }  
  }
  return message; 
};

exports.renderSignUp = (req,res)=> {
	res.render('signup',{
		messages: req.flash('error'),
		user: ""

	});
}

exports.SignUp = (req,res) => {
	console.log(req.body.email);
	

	let user = new User(req.body);

		user.save(function(err){
			if(err){
				var message = getErrorMessage(err);
				console.log(err);
				req.flash('error',message);
				res.redirect('/signup');
			}
			else{
				console.log(user);
				var prompt = "Please sign in  here";
				req.flash('info',prompt);
				res.redirect('/login');
			}
		});
}

exports.renderLogIn = (req,res) => {
	if(!req.user){
		res.render('login',{
			messages: req.flash('error') || req.flash('info'),
			user: ""
		});
	}

	else{
		res.redirect('/');
	}
}

exports.search = (req,res) => {
	console.log(req.body.query)
	User.findOne({ 'username': "morgan" }, function (err, user) {
	  if (err) {
	  	console.log(err);
	  }
	  req.session.results = user;
	  res.json(user);
	  //res.redirect('/');
	  /*res.render('index',{
			name: req.user.username,
			results: req.session.results
	  });*/
	})
}

exports.renderChat = (req,res) => {

	console.log("am working");
	console.log(req.body);
	res.render('chat-page',{
		name: name
	});
}


