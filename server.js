require('dotenv').config();

const app = require('./app');

const port = process.env.PORT;

console.log(process.env.DB_URL);

app.listen(port, () => {
  console.log('Server listening on port 3000');
});
