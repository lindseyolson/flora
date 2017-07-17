// requires
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var router = express.Router();
var bcrypt = require ('bcrypt');
var plantModel = require ('../models/plants');

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );

// GET //
router.get('/:username', function( req, res ){
  console.log('/plants GET route hit');
  var username = req.params.username;
  console.log(username);
  plantModel.find({username: username}).then( function( data ){
      res.send( data );
    });
}); // end get

module.exports = router;
