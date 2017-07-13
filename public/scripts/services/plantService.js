app.service ('PlantService', function( $http ){
  var sv = this;

  sv.displayPlants = function () {
    return $http.get( '/plants' ).then( function( data ){
      console.log('back from db:', data.data);
      return data.data;
    }); // end $http
  }; // end displayPlants

  sv.savePlantSpecs = function( plantSpecs ) { // change this to *create* not *save*
    return $http.post( '/plants', plantSpecs ).then( function( response ){
      console.log('back from db:', response);
      return response;
    }); // end $http
  }; // end savePlantSpecs

  sv.updatePlantSpecs = function( id, updatedPlantSpecs ) {
    return $http({
      method: 'PUT',
      url: '/plants/' + id,
      data: updatedPlantSpecs
    }).then( function( response ){
      console.log('in service, back from server:', response);
    }); // end $http
  }; // end savePlantSpecs

  sv.deletePlant = function( id ) {
    return $http({
      method: 'DELETE',
      url: '/plants/' + id
    }).then( function( response ){
      console.log('in service, back from server:', response);
    }); // end $http
  }; // end savePlantSpecs

  sv.displayPlantDetails = function( id ) {
    return $http.get( '/plants/' + id ).then(function( data ){
      console.log('back from db:', data.data);
      return data.data;
    }); // end $http
  }; // end displayPlantDetails

}); // end PlantService
