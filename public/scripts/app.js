var app = angular.module ( 'app', ['ngRoute', 'angucomplete-alt', 'xeditable'] );

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config( function( $routeProvider ) {
  $routeProvider.when ('/', {
    templateUrl: 'views/partials/plants.html',
    controller: 'PlantController as pc'
  }).when ('/wishlist', {
    templateUrl: 'views/partials/wishlist.html',
    controller: 'PlantController as pc'
  }).when ('/plants', {
    templateUrl: 'views/partials/plants.html',
    controller: 'PlantController as pc'
  }).when ('/plant-specs', {
    templateUrl: 'views/partials/plant-specs.html',
    controller: 'PlantController as pc'
  }).when ('/wishlist-plant-specs', {
    templateUrl: 'views/partials/wishlist-plant-specs.html',
    controller: 'PlantController as pc'
  });
}); // end app.config
