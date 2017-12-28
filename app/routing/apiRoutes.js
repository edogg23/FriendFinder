var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		console.log('friends: ', friends);
			// res.sendFile(path.join(__dirname, "./data/friends.js"));
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		console.log('userInput: ' + JSON.stringify(userInput));
			// res.sendFile(path.join(__dirname, "./data/friends.js"))
	});
}