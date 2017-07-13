var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var router = express.Router();
var Schema = mongoose.Schema;

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );

// connect to mongoose
mongoose.connect('localhost:27017/gardenApp');

// schema
var plantSchema = new mongoose.Schema({
  picture: Schema.Types.Mixed,
  common_name: String,
  life_form: String,
  exposure: String,
  height: String,
  width: String,
  flower_color: String,
  bloom_time: String,
  mn_native: String,
  list: String,
  notes: String
}); // end schema

// plant model
var plantModel = mongoose.model('plantModel', plantSchema);

// GET //
router.get('/', function( req, res ){
  console.log('/plants GET route hit');
  plantModel.find().then( function( data ){
    console.log( data );
    res.send( data );
  }); // end find()
}); // end get

router.get('/:id', function( req, res ){
  console.log('/plants GET by id route hit');
  var id = req.params.id;
  plantModel.findOne({_id: id}).then(function( data ){
    res.send( data );
  }); // end findbyId
}); // end get

// POST //
router.post('/', function( req,res ){
  console.log('/plants POST route hit:', req.body);
  var newRecord = plantModel(req.body);
  newRecord.save();
  res.sendStatus(201);
}); // end post


// PUT //
router.put('/:id', function ( req, res ){
  var id = req.params.id;
  var updatedPlantSpecs = req.body;
  plantModel.update(
    {_id: id}, updatedPlantSpecs).then(function(){
      res.sendStatus(200);
    });
}); // end put

router.delete('/:id', function ( req, res ){
  var id = req.params.id;
  plantModel.remove(
    {_id: id}).then(function(){
      res.sendStatus(200);
    });
}); // end put


module.exports = router;
