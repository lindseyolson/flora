// requires
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var router = express.Router();
var bcrypt = require ('bcrypt');
var user = require ('../models/user');

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );

// GET //
router.get('/', function(req,res){
  console.log('register url hit');
  res.sendFile(path.resolve('public/views/register.html'));
}); // end get

// POST //
router.post('/', function(req,res){
  console.log('in register post:', req.body);
  // generating salt
  bcrypt.genSalt (12, function( err, salt ){
    if (err) {
      console.log('salt error:', err);
      res.sendStatus(400);
    }
    else {
      console.log('salt:', salt);
      bcrypt.hash (req.body.password, salt, function ( err, hash ){
        if (err) {
          console.log('hash error:', err);
          res.sendStatus(400);
        }
        else {
          console.log('hash:', hash);
          // saving hash password
          var newUser = {
            username: req.body.username,
            password: hash
          };
          console.log('saving user:', newUser);
          // saving new user to db
          user(newUser).save().then( function(){
            res.sendStatus(201);
          }); // end save newUser
        }
      }); // end hash
    } // end else
  }); // end bcrypt

}); // end post

module.exports = router;
