// requires
var express = require ('express');
var path = require ('path');
var router = express.Router();
var passport = require ('passport');
var user = require ('../models/user');

// GET //
router.get('/', function( req,res, next ){
  console.log('register url hit');
  res.sendFile(path.resolve('public/views/register.html'));
}); // end get

// POST //
router.post('/', function( req, res, next ) {
  user.create( req.body, function( err, post ) {
    if( err ) {
      next( err );
    }
    else {
      res.redirect('/');
    }
  });
}); // end post

module.exports = router;
