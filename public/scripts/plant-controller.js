var app = angular.module ( 'app', [] );

app.controller( 'PlantController', PlantController );

function PlantController( PlantService ){
  var vm = this;
  console.log('NG');

  vm.registerUser = function(){
    console.log('in controller: registerUser()');

    let credentials = {
      username: vm.registerUsername,
      password: vm.registerPassword
    };

    PlantService.registerUser( credentials ).then(function() {
      vm.registerUsername = '';
      vm.registerPassword = '';
    }); // end PlantService
  }; // end register

  vm.loginUser = function() {
    console.log('in controller: loginUser()');

    let credentials = {
      username: vm.username,
      password: vm.password
    };

    PlantService.loginUser( credentials ).then( function() {
      console.log('logged in');
    }); // end PlantService

  }; // end loginUser

} // end PlantController
