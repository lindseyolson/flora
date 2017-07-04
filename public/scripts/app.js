var app = angular.module ( 'app', ['ngRoute', 'xeditable', 'ui.bootstrap'] );

app.config( function( $routeProvider ) {
  $routeProvider.when ('/', {
    templateUrl: 'views/partials/garden.html',
    controller: 'UserController as uc'
  }).when ('/wishlist', {
    templateUrl: 'views/partials/wishlist.html',
    controller: 'UserController as uc'
  }).when ('/garden', {
    templateUrl: 'views/partials/garden.html',
    controller: 'UserController as uc'
  });
}); // end app.config
