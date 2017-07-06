var app = angular.module ( 'app', ['ngRoute', 'angucomplete-alt', 'ui.select', 'ngSanitize'] );

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
    controller: 'TypeaheadController as tc'
  });
}); // end app.config
