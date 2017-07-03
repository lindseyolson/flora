// requires
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var router = express.Router();
var bcrypt = require ('bcrypt');
var user = require ('../user');

// uses
router.use ( bodyParser.urlencoded( { extended: true } ) );
router.use ( bodyParser.json() );

// GET //
router.get( '/', function( req,res ) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end get

// POST //
router.post( '/', function( req, res ) {
  console.log('in base post:', req.body);
  user.findOne({
    username: req.body.username
  }, function ( err, user ) {
    if ( err ) {
      console.log('find user error:', err );
      res.sendStatus(400);
    } // end error
    else {
      if ( user != undefined ) {
        console.log('comparing:', req.body.password, mongo.password);
        bcrypt.compare(req.body.password, mongo.password, function( err, isMatch ){
          if ( err ) {
            console.log('compare err:', err);
            res.sendStatus(400);
          } // end error
          else {
            console.log('found user');
            if ( isMatch ) {
              res.send('match found');
            }
            else {
              res.send ('no match found');
            }
          } // end no error
        }); // end bcrypt compare
      }
      else {
        console.log('no user found');
        res.sendStatus(400);
        }
      } // end no error
    }
  ); // end findOne
}); // end post

module.exports = router;
