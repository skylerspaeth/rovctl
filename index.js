var express = require('express');
var app = express();
var io = require('socket.io').listen(8081);
var exec = require('child_process').exec

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('rovctl listening on port', port);

io.on('connection', socket => socket.on('message', msg => newValues(msg)));

function newValues(msg) {
	var data = JSON.parse(msg);
	console.log(data.alpha, data.beta, data.gamma);
	//exec('python script.py', function (error, stdout, stderr) {
//		console.log(stdout);
//	});
};
});
