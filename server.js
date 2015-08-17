var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//var facebook = require('./Modules/facebook.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use('/', express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8000;

var router = express.Router();

app.use('', router);

//Start the Server
app.listen(port);
console.log("Magic happens at port " + port);