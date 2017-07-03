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

} // end PlantController
