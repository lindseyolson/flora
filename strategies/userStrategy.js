var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var user = require ('../modules/models/user');

// Store this user's unique id in the session for later reference
// Only runs during authentication
// Stores info on req.session.passport.user
passport.serializeUser(function( user, done ) {
  console.log('serialized:', user);
  done(null, user.id);
}); // end serialUser

// Runs on every request after user is authenticated
// Look up the user's id in the session and use it to find them in the DB for each request
// result is stored on req.user
passport.deserializeUser(function( id, done ) {
  user.findById( id, function( err, user ) {
    if( err ) {
      done( err );
    }
    console.log('deserialized:', user);
    done( null, user );
  }); // end findById
}); // end deserializeUser

// Does actual work of logging in
// Called by middleware stack
passport.use( 'local', new localStrategy({
  passReqToCallback: true,
  username: 'username'
}, function( req, username, password, done ) {
  // mongoose
  user.findOne({username: username}, function( err, user ) {
    if( err ) {
      throw err;
    }
    if( !user ) {
      // user not found
      console.log('no user found');
      return done( null, false, {message: 'Invalid credentials.'});
    }
    else {
      // user found: check password against the one stored in DB
      user.comparePassword( password, function( err, isMatch ) {
        if( err ) {
          throw err;
        }
        if( isMatch ) {
          // populate user object on the session through serializeUser
          console.log('isMatch');
          return( done( null, user ));
        }
        else {
          // no match
          console.log('invalid password');
          done( null, false, {message: 'Invalid credentials.'});
        }
      });
    } // end else
  }); // end findOne
})); // end passport

module.exports = passport;
