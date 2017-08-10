app.controller( 'UserController', function ( UserService, $window, $location ){
  var vm = this;
  console.log('in user controller');
  vm.username='';
  vm.password='';
  vm.registerUsername='';
  vm.registerPassword='';
  vm.login= true;
  vm.user = {};
  vm.UserService = UserService;


  vm.showLoginOrRegister = function(){
    UserService.showLoginOrRegister();
  };

  vm.registerUser = function(){
    console.log('in controller: registerUser()');
    if (vm.registerUsername === '' || vm.registerPassword === '') {
      vm.message = 'You must choose a name and password.'
    }
    else {
      let credentials = {
        username: vm.registerUsername,
        password: vm.registerPassword
      };

      UserService.registerUser( credentials ).then(function() {
        vm.registerUsername = '';
        vm.registerPassword = '';
      }); // end UserService
    }
  }; // end register


  // login user
  vm.loginUser = function() {
    if (vm.username === '' || vm.password === '') {
      console.log('blank');
      vm.message = 'You must enter a name and password.';
    }
    else {
      var credentials = {
        username: vm.username,
        password: vm.password
      };
      UserService.loginUser( credentials );
    }
  }; // end loginUser

  vm.logoutUser = function() {
    UserService.logoutUser();
    // console.log('in controller: logoutUser()');
    // $window.location.href = '/';
  }; // end logoutUser
}); // end UserController
