// requires
var express = require ('express');
var app = express();

// routes
var index = require ('./modules/routes/index');
var register = require ('./modules/routes/register');
var garden = require ('./modules/routes/garden');
var plants = require ('./modules/routes/plants');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static('public'));
app.use ('/', index);
app.use ('/register', register);
app.use ('/garden', garden);
app.use ('/plants', plants);

// server
app.listen (port, function(){
  console.log('server listening on port:', port);
});
