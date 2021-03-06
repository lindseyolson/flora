var app = angular.module ( 'app', ['ngRoute', 'angucomplete-alt', 'xeditable', 'ui.bootstrap', 'angular-filepicker'] );

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});


app.config( function( $routeProvider, filepickerProvider ) {
  $routeProvider
    .when ('/', {
    templateUrl: 'views/partials/login.html',
    controller: 'UserController as uc'
  }).when ('/wishlist', {
    templateUrl: 'views/partials/wishlist.html',
    controller: 'PlantController as pc'
  }).when ('/plants', {
    templateUrl: 'views/partials/plants.html',
    controller: 'PlantController as pc'
  }).when ('/add-new-plant', {
    templateUrl: 'views/partials/add-new-plant.html',
    controller: 'PlantController as pc'
  }).when ('/wishlist-plant-specs', {
    templateUrl: 'views/partials/wishlist-plant-specs.html',
    controller: 'PlantController as pc'
  }).when ('/detail/:id', {
    templateUrl: 'views/partials/detail.html',
    controller: 'PlantController as pc'
  }).when ('/failure', {
    templateUrl: 'views/partials/failure.html',
    controller: 'UserController as uc'
  });
  filepickerProvider.setKey('ASsVBhFqLQGGBwDxVquEqz');
}); // end app.config
