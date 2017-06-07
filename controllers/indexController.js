const User = require('mongoose').model('User');

exports.renderIndex = (req,res) =>{
	if(req.user){
		//detecting only new users 
		User.findOne({'username' : req.user.username},(err,user) =>{
			//console.log(user.connections);
			if(user.connections != 0){
				for(let x in user.connections){
					console.log(user.connections[x]);
					//console.log(user.connections[x].firstname);
				}
			}
			
		})

		res.render('index',{
					name: req.user.username,
					results: req.session.results,
					user: req.user
		});
		
	}
	else{
		res.redirect('/login');
	}
	
};