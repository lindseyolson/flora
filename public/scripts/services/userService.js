app.service ('UserService', function( $http, $location ){
  var sv = this;
  sv.username = '';
  sv.showNav = false;
  sv.login = true;

  function showNav() {
    console.log('in showNav:',sv.showNav);
    sv.showNav = !sv.showNav;
    console.log('in showNav:', sv.showNav);
  }

  sv.showLoginOrRegister = function() {
    sv.login = !sv.login;
    sv.message = '';
  }

  sv.registerUser = function( credentials ) {
    return $http.post('/register', credentials ).then( function(){
      sv.showLoginOrRegister();
    }); // end $http
  }; // end registerUser

  sv.loginUser = function( credentials ) {
    return $http.post('/', credentials ).then( function(response) {
      if( response.data === 'match found') {
        console.log('response in login user', response.config.data.username);
        sv.username = response.config.data.username;
        $location.path('/plants');
        showNav();
      } // end match found
      else {
        console.log('invalid credentials');
        sv.message = 'Invalid username or password, please try again.';
      } // end error
      return response;
    }); // end $http
  }; // end loginUser

  sv.logoutUser = function() {
    $location.path('/');
    showNav();
  }; // end logout user

}); // end service
