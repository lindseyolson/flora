var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var router = express.Router();

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );

// connect to mongoose
mongoose.connect('localhost:27017/gardenApp');

// schema
var plantSchema = new mongoose.Schema({
  common_name: String,
  life_form: String,
  exposure: String,
  height: String,
  width: String,
  flower_color: String,
  bloom_time: String,
  mn_native: String,
  notes: String
}); // end schema

// plant model
var plantModel = mongoose.model('plantModel', plantSchema);

// GET //
router.get('/', function( req, res ){
  console.log('/plants GET hit');
  plantModel.find().then( function( data ){
    console.log( data );
    res.send( data );
  }); // end find()
}); // end get

// POST //
router.post('/', function( req,res ){
  console.log('/plants POST hit:', req.body);
  var newRecord = plantModel(req.body);
  newRecord.save();
  res.sendStatus(201);
}); // end post

module.exports = router;
