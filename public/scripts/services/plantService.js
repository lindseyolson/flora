app.service ('PlantService', function( $http ){
  var sv = this;

  sv.displayPlants = function () {
    return $http.get( '/plants' ).then( function( data ){
      console.log('back from db:', data.data);
      return data.data;
    }); // end $http
  }; // end displayPlants

  sv.savePlantSpecs = function( plantSpecs ) {
    return $http.post( '/plants', plantSpecs ).then( function( response ){
      console.log('back from db:', response);
      return response;
    }); // end $http
  }; // end savePlantSpecs

}); // end PlantService
