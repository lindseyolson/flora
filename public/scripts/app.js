var app = angular.module ( 'app', ['ngRoute'] );

app.config( function( $routeProvider ) {
  $routeProvider.when ('/', {
    templateUrl: 'views/partials/plants.html',
    controller: 'UserController as uc'
  }).when ('/wishlist', {
    templateUrl: 'views/partials/wishlist.html',
    controller: 'UserController as uc'
  }).when ('/plants', {
    templateUrl: 'views/partials/plants.html',
    controller: 'UserController as uc'
  }).when ('/plant-specs', {
    templateUrl: 'views/partials/plant-specs.html',
    conotroller: 'TypeaheadController as tc'
  });
}); // end app.config
