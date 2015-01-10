var http = require('http');
var express  = require("express");
var app = express();
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  if (req.useragent.isMobile) {
    res.sendfile('./index.html');
  }
});

