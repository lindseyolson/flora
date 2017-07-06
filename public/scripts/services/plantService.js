app.service ('PlantService', function( $http ){
  var sv = this;

  sv.savePlantSpecs = function( data ) {
    return $http.post( '/plants', data ).then( function( response ){
console.log('back from db:', response);
      return response;
    }); // end $http
  }; // end savePlantSpecs

}); // end PlantService



$scope.saveUser = function() {
    // $scope.user already updated!
    return $http.post('/saveUser', $scope.user).error(function(err) {
      if(err.field && err.msg) {
        // err like {field: "name", msg: "Server-side error for this username!"}
        $scope.editableForm.$setError(err.field, err.msg);
      } else {
        // unknown error
        $scope.editableForm.$setError('name', 'Unknown error!');
      }
    });
  };
