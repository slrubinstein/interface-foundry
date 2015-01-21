var request = require('request');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./index.html');
	});

	app.post('/vimeo', function(req, res) {
		var channel = req.body.channel;
		var url = 'http://vimeo.com/api/v2/channel/' +
							channel + '/videos.json';


		vimeoCall(url, function(err, body) {
			if (err) {
				console.log('error with vimeo call', err);
				res.send(500);
			}
			try {
			  var data = JSON.parse(body);
			  res.send(data);
			} catch(err) {
				console.log(body)
			  console.log(err);
			  res.send('Not a valid channel')
			}
		});

	});
}

function vimeoCall(url, cb) {

	request.get(url, function(err, response, body) {
		if (err) { cb(err); }
		cb(null, body);
	})
}