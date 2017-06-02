const use = require('../controllers/indexController');

module.exports = (app) => {
	app.get('/',use.renderIndex);
}