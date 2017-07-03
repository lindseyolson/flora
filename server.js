// requires
var express = require ('express');
var app = express();
var index = require ('./modules/routes/index');
var register = require ('./modules/routes/register');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static('public'));
app.use ('/', index);
app.use ('/register', register);

// server
app.listen (port, function(){
  console.log('server listening on port:', port);
});
