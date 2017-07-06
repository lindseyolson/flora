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
  data: String
}); // end schema

// plant model
var plantModel = mongoose.model('plants', plantSchema);

// POST //
router.post('/', function(req,res){
  console.log('/plants GET hit:', req.body);
}); // end get

module.exports = router;
