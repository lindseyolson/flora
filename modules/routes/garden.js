// requires
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var router = express.Router();
var bcrypt = require ('bcrypt');

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );

// GET //
router.get('/', function(req,res){
  console.log('register url hit');
  res.sendFile(path.resolve('public/views/garden.html'));
}); // end get

module.exports = router;
