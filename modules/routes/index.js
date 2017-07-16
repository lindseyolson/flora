// requires
var express = require ('express');
var path = require ('path');
var router = express.Router();
var passport = require ('passport');
var user = require('../models/user');

// GET //
router.get( '/', function( req,res ) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end get

// POST //
router.post('/',
    passport.authenticate( 'local', {
      successRedirect: '/user',
      failureRedirect: '/'
    })
);

module.exports = router;
