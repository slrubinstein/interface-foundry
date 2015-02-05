// var request = require('request');
var bubbles = require('./sample_bubbles.json');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./index.html');
	});

	app.get('/bubbles', function(req, res) {
		res.json(bubbles);
	});

}
