app.controller( 'UserController', function ( UserService, $window, $location ){
  var vm = this;
  vm.username='';
  vm.password='';
  vm.registerUsername='';
  vm.registerPassword='';
  vm.login= true;
  vm.user = {};
  vm.showNav = false;

  // vm.load = function() {
  //   $(".navBar a").on("click", function(){
  //      $(".navBar").find(".active").removeClass("active");
  //      $(this).parent().addClass("active");
  //   });
  // };

  // vm.load();

  vm.showLoginOrRegister = function() {
    vm.login = !vm.login;
    vm.message = '';
  }

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

  vm.loginUser = function() {
    // console.log('in controller: loginUser()');
    if (vm.username === '' || vm.password === '') {
      console.log('blank');
      vm.message = 'You must enter a name and password.';
    }
    else {
      var credentials = {
        username: vm.username,
        password: vm.password
      };
      UserService.loginUser( credentials ).then( function( response ) {
        console.log('from controller:', response);
        if( response.data === 'match found') {
          vm.user.username = response.config.data.username;
          console.log(vm.user.username);
          vm.showNav = true;
          $location.path('/plants');
          // vm.load();
        } // end match found
        else {
          console.log('invalid credentials');
          vm.message = 'Invalid username or password, please try again.';
        } // end error
      }); // end UserService
    }
  }; // end loginUser

  vm.logoutUser = function() {
    console.log('in controller: logoutUser()');
    $window.location.href = '/';
    vm.showNav = false;
  }; // end logoutUser
}); // end UserController
