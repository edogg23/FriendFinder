// var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require ('body-parser');
var htmlRoutes = require('./app/routing/htmlRoutes');
var path = require('path');


var PORT = process.env.PORT || 3000;

var app = express();

// makes static assets in the public folder avaliable
app.use(express.static('app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//htmlRoutes(app);
app.get('/', function(req, res) {
	res.sendFile(__dirname + "/app/public/" + "home.html")
});

var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);

//apiRoutes(app);

app.listen(PORT, function() {
	console.log("Server is listening on PORT " + PORT);
});

// handleRequest();