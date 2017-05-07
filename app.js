// require in express lib
var express = require('express');
// call app instance on express lib
var app = express();
// set port var for app instance
app.set('port', 3101);
// use express static server to display public directory
app.use(express.static('public'))
// on app.get:3000 serve and display console output
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('Hosting on port ' + port);
})
