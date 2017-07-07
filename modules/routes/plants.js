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
  mn_native: Boolean,
  notes: String
}); // end schema

// plant model
var plantModel = mongoose.model('plants', plantSchema);

// POST //
router.post('/', function(req,res){
  console.log('/plants POST hit:', req.body);
}); // end get

module.exports = router;
