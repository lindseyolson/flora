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
  plantModel.find().then( function( err, messages ){
    if( err ) {
      console.log('get route ERROR:', err);
      res.sendStatus(500);
    }
    else {
      res.send( data );
    }
  }); // end find()
}); // end get

router.get('/:id', function( req, res ){
  console.log('/plants GET by id route hit');
  var id = req.params.id;
  plantModel.findOne({_id: id}).then(function( err, data ){
    if( err ) {
      console.log('get route ERROR:', err);
      res.sendStatus(500);
    }
    else {
      res.send( data );
    }
  }); // end findbyId
}); // end get

// POST //
router.post('/', function( req,res ){
  console.log('/plants POST route hit:', req.body);
  var newRecord = plantModel(req.body);

  newRecord.save(function( err, post ){
    if( err ) {
      console.log('post route ERROR:', err);
      res.sendStatus(500);
    }
    else {
      res.sendStatus(201);
    }
  });
}); // end post


// PUT //
router.put('/:id', function ( req, res ){
  var id = req.params.id;
  var updatedPlantSpecs = req.body;
  plantModel.update(
    {_id: id}, updatedPlantSpecs).then(function( err, put ){
      if( err ) {
        console.log('put route ERROR:', err);
        res.sendStatus(500);
      }
      else {
        res.sendStatus(200);
      }
    });
}); // end put

router.delete('/:id', function ( req, res ){
  var id = req.params.id;
  plantModel.remove(
    {_id: id}).then(function( err ){
      if ( err ) {
        console.log('delete route ERROR:', err);
        res.sendStatus(500);
      }
      else {
        res.sendStatus(200);
      }
    });
}); // end put


module.exports = router;
