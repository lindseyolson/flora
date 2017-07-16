app.service ('UserService', function( $http ){
  var sv = this;

  sv.registerUser = function( credentials ) {
    return $http.post('/register', credentials ).then( function(response){
      return response;
    }); // end $http
  }; // end registerUser

  sv.loginUser = function( credentials ) {
    return $http.post('/', credentials ).then( function(response) {
      console.log('in service:', response);
      return response;
    }); // end $http
  }; // end loginUser

}); // end service
