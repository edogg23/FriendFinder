var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
	console.log('in apiRoutes.js');
	
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		console.log('friends: ', friends);
			// res.sendFile(path.join(__dirname, "./data/friends.js"));
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		console.log('userInput: ' + JSON.stringify(userInput));
			// res.sendFile(path.join(__dirname, "./data/friends.js"))

		var userResponses = userInput;
		console.log('userResponses: ', userResponses);			

		var matchName = '';
		var totalDifference = 10000;

		for (var i = 0; i < friends.length; i++) {
			var difference = 0;
			for (var j = 0; j < userResponses.length; j++) {
				difference += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			if (difference < totalDifference) {
				totalDifference = difference;
				matchName = friends[i].name;
			}
		}
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName});
	});
};