var http = require('http');

var express  = require("express");
var useragent = require('express-useragent');

var app = express();

var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.use(useragent.express());

app.get('/', function(req, res) {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/public/mobile.html');
  } else {
    res.sendFile(__dirname + '/public/desktop.html');
  }
}); 

var port = process.env.PORT || 8080;
server.listen(port);
console.log("App listening on port " + port);
