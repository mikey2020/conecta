require('dotenv').config();

const app = require('./app');

const port = process.env.PORT ;

const server = app.listen(port,()=>{
	console.log("Server listening on port 3000");
});