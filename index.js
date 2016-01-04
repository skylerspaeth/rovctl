var express = require('express');
var app = express();
var _ = require('underscore');
var io = require('socket.io').listen(8081);

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at', port);

io.on('connection', socket => socket.on('message', msg => newValues(msg)));

function newValues(msg) {
	var data = JSON.parse(msg);
	console.log(data.alpha, data.beta, data.gamma);
};

});