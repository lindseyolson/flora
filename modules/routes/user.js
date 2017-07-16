// requires
var express = require ('express');
var router = express.Router();
var passport = require ('passport');
var user = require ('../models/user');

// Handles Ajax request for user information if user is authenticated
router.get('/', function( req, res ) {
  console.log('/user route hit');
  //check if logged in
  if( req.isAuthenticated() ) {
    //send back user object from database
    console.log('logged in');
    console.log(req.user);
    res.send(req.user);
  }
  else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.redirect( 301, '/' );
  }
}); // end get

// clear all server session information about this user
router.get('/logout', function( req, res ) {
  // passport's built-in method to log out the user
  console.log('logged out');
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
