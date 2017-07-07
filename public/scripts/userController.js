app.controller( 'UserController', function ( UserService, $window ){
  var vm = this;

  vm.registerUser = function(){
    console.log('in controller: registerUser()');

    let credentials = {
      username: vm.registerUsername,
      password: vm.registerPassword
    };

    UserService.registerUser( credentials ).then(function() {
      vm.registerUsername = '';
      vm.registerPassword = '';
    }); // end UserService
  }; // end register

  vm.loginUser = function() {
    console.log('in controller: loginUser()');

    let credentials = {
      username: vm.username,
      password: vm.password
    };

    UserService.loginUser( credentials ).then( function( response ) {
      console.log('from controller:', response);
      if( response.data === 'match found') {
        $window.location.href= '/garden';
      } // end match found
      else {
        console.log(vm.loggedIn);
        $window.location.href = '/failure';
      } // end error
    }); // end UserService
  }; // end loginUser

  vm.logoutUser = function() {
    console.log('in controller: logoutUser()');
    $window.location.href = '/';
  }; // end logoutUser
}); // end UserController
