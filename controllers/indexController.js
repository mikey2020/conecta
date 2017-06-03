exports.renderIndex = (req,res) =>{
	if(req.user){
		res.render('index',{
			name: req.user.username,
			results: req.session.results
		});
	}
	else{
		res.redirect('/login');
	}
	
};