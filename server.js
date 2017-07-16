// requires
var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var path = require ('path');

var passport = require ('./strategies/userStrategy');
var session = require ('express-session');

// routes
var index = require ('./modules/routes/index');
var register = require ('./modules/routes/register');
var user = require ('./modules/routes/user');
var plants = require ('./modules/routes/plants');

// globals
var port = process.env.PORT || 1616;

// uses
// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// static files
app.use (express.static('public'));
// passport session configuration
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));
// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());
// routes
app.use ('/', index);
app.use ('/register', register);
app.use ('/user', user);
app.use ('/plants', plants);

// mongo connection
var mongoURI = "mongodb://localhost:27017/gardenApp";
var mongoDB = mongoose.connect(mongoURI).connection;
mongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
});
mongoDB.once('open', function(){
   console.log("Connected to Mongo");
});

// server
app.listen (port, function(){
  console.log('server listening on port:', port);
});
