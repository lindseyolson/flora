var app = angular.module ( 'app', ['ngRoute', 'angucomplete-alt', 'xeditable'] );

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

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
    controller: 'PlantController as pc'
  });
}); // end app.config
