var mongoose = require ('mongoose');

mongoose.connect ('localhost:27017/gardenApp');

var userSchema = new mongoose.Schema({
  username: String,
  password: String
}); // end schema

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
