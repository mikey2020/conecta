const User = require('mongoose').model('User');

exports.renderIndex = (req,res) =>{
	if(req.user){
		//detecting only new users 
		User.findOne({'username' : req.user.username},(err,user) =>{
			
		})
		res.render('index',{
			name: req.user.username,
			results: req.session.results
		});
	}
	else{
		res.redirect('/login');
	}
	
};