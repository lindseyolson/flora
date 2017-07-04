var app = angular.module ( 'app', [] );

app.controller( 'PlantController', PlantController );

function PlantController( PlantService, $window ){
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

    PlantService.loginUser( credentials ).then( function( response ) {
      console.log('from controller:', response);
      if( response.data === 'match found') {
        vm.loggedIn = true;
      } // end match found
      else {
        vm.loggedIn = false;
        console.log(vm.loggedIn);
        $window.location.href = '/views/failure.html';
      } // end error
    }); // end PlantService
  }; // end loginUser

  vm.logoutUser = function() {
    console.log('in controller: logoutUser()');
    vm.loggedIn = false;
    vm.username = '';
    vm.password = '';
  }

} // end PlantController
