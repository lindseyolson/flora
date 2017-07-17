var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var router = express.Router();
var plantModel = require ('../models/plants');

// uses
router.use ( bodyParser.urlencoded( { extended:true } ) );
router.use ( bodyParser.json() );


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
    {_id: id}, updatedPlantSpecs).then(function( put ){

        res.sendStatus(200);

    });
}); // end put

router.delete('/:id', function ( req, res ){
  var id = req.params.id;
  plantModel.remove(
    {_id: id}).then(function( del ) {
        res.sendStatus(200);
      });
}); // end put


module.exports = router;
