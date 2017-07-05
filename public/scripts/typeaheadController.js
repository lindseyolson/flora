// app.controller('TypeaheadController', ['$scope', '$http', '$rootScope',
//   function MainController($scope, $http, $rootScope) {
//     $scope.remoteUrlRequestFn = function(str) {
//       return {q: str};
//     };
//
//     $scope.plants =
//     [
//       {'name':'daisy'},
//       {'name':'rose1'},
//       {'name':'rose2'},
//       {'name':'rose3'},
//       {'name':'rose4'},
//       {'name':'rose5'},
//
//     ];
//   }]);


app.controller( 'TypeaheadController', function() {
  var vm = this;
  
  vm.doThis = function() {
    console.log('Are you working?');
  }



}); // end TypeaheadController
