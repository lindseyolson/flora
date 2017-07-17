app.service ('UserService', function( $http ){
  var sv = this;
  sv.username = '';

  sv.registerUser = function( credentials ) {
    return $http.post('/register', credentials ).then( function(response){
      console.log('back from register attempt:', response);
    }); // end $http
  }; // end registerUser

  sv.loginUser = function( credentials ) {
    return $http.post('/', credentials ).then( function(response) {
      console.log('back from login attempt:', response);
      console.log(response.config.data.username);
      sv.username = response.config.data.username;
      return response;
    }); // end $http
  }; // end loginUser

}); // end service
