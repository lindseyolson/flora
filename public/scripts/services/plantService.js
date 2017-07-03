app.service ('PlantService', function($http){
  var sv = this;

  sv.registerUser = function( credentials ) {
    console.log('in service: registerUser()');

    return $http.post('/register', credentials ).then ( function(response){
      console.log('back from register attempt:', response);
    }); // end $http
  }; // end registerUser
}); // end service
