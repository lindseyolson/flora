// app.controller('UserController', ['$http', '$location', 'UserService', '$window', function($http, $location, $window, UserService){
app.controller('UserController', function($http, $location, $window, UserService){

  var vm = this;

  vm.user = {
    username: '',
    password: ''
  }; // end user

  vm.registerUser = function(){
    console.log('in controller: registerUser()');
    if ( vm.user.username === '' || vm.user.password === '') {
      vm.message = 'You must complete both fields to register.';
    }
    else {
      let credentials = vm.user;
      UserService.registerUser( credentials ).then(function( response ) {
        console.log('success');
        vm.user.username = '';
        vm.user.password = '';
      },
      function( response ) {
        console.log('error:', response);
        vm.message = 'Please try again.';
    }); // end UserService
    }
  }; // end register




  vm.loginUser = function() {
    console.log('in controller: loginUser()');
    if (vm.user.username === '') {
      vm.message = 'Please enter your username.';
    }
    else if (vm.user.password === '') {
      vm.message = 'Please enter your password.';
    }
    else {
      let credentials = vm.user;
      console.log(credentials);

      // $http.post('/', vm.user).then(function(response) {
      //   if (response.data.username) {
      //     console.log('success: ', response.data);
      //     // location works with SPA (ng-route)
      //     console.log('redirecting to user page');
      //     // $window.location.href = '/garden';
      //     $location.path('/plants');
      //   } else {
      //     console.log('failure: ', response);
      //     vm.message = "Try Again You Fool!";

      UserService.loginUser( credentials ).then( function( response ) {
        if( response.config.data.username )  {
          console.log(response.config.data.username);
          console.log('successful login');
          $location.path('/plants');
          // $window.location.href = '/plants';
          // $location.path('/garden');
        } // end match found
        else {
          console.log('login failed:', response);
          vm.message = 'Log in failed.';
        } // end error
      }); // end UserService
    }
  }; // end loginUser

  vm.logoutUser = function() {
    console.log('in controller: logoutUser()');
    $window.location.href = '/';
  }; // end logoutUser
}); // end UserController
