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
  life_form: Number,
  exposure: Number,
  height: String,
  width: String,
  flower_color: String,
  bloom_time: String,
  mn_native: Number,
  grouping: Number,
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
});


module.exports = router;
