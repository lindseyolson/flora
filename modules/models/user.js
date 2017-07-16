var mongoose = require ('mongoose');
var bcrypt = require ('bcrypt');
var SALT_WORK_FACTOR = 12;

// monogoose schema
var userSchema = new mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true}
}); // end schema

// Called before adding a new user to the DB. Encrypts password.
userSchema.pre('save', function( next ) {
  var user = this;
  if( !user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function( err, salt ) {
    if( err ) {
      return next( err );
    }

    bcrypt.hash( user.password, salt, function( err, hash ) {
      if ( err ) {
        return next ( err );
      }
      user.password = hash;
      next();
    });
  });
}); // end password Encrypts

// Used by login methods to compare login form password to DB password
userSchema.methods.comparePassword = function( candidatePassword, callback ) {
  bcrypt.compare( candidatePassword, this.password, function( err, isMatch ) {
    if( err ) {
      console.log(err);
      return callback( err );
    }
      console.log(isMatch);
    callback( null, isMatch );
  });
}; // end comparePassword

var User = mongoose.model('User', userSchema);
module.exports = User;
