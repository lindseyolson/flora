var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

// schema
var plantSchema = new mongoose.Schema({
  username: String,
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


module.exports = plantModel;
