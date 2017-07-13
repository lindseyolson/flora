app.controller( 'PlantController', function( PlantService, filepickerService, $routeParams, $location ) {
  var vm = this;
  vm.plantData = plantData;

  vm.upload = function(){
    filepickerService.pick(
      {
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','IMAGE_SEARCH','CONVERT'],
        openTo: 'COMPUTER',
        cropDim: [500, 500],
        imageQuality: 80
      },
        function(Blob){
            console.log(JSON.stringify(Blob));
            vm.selectedPlant.originalObject.picture = Blob;
            // vm.$apply();
        }
    );
  };

  vm.reupload = function(){
    filepickerService.pick(
        {
          mimetype: 'image/*',
          language: 'en',
          services: ['COMPUTER','DROPBOX','IMAGE_SEARCH','CONVERT'],
          openTo: 'COMPUTER',
          cropDim: [500, 500],
          imageQuality: 80
        },
        function(Blob){
            console.log(JSON.stringify(Blob));
            vm.plant.picture = Blob;
            // vm.$apply();
        }
    );
  };

  vm.displayPlants = function() {
    console.log('in displayPlants');
      PlantService.displayPlants().then( function( data ) {
        vm.plantsToDisplay = data;
        console.log(data);
      }); // end PlantService
  }; // end displayPlants

  vm.savePlantSpecs = function(list) {
    // vm.selectedPlant.originalObject.grouping = vm.grouping;
    var plantSpecs = vm.selectedPlant.originalObject;
    // plantSpecs.grouping = vm.grouping;
    console.log(plantSpecs);
    PlantService.savePlantSpecs( plantSpecs ).then(function() {
      if (list === 'garden list') {
        $location.url('/plants');
      }
      else {
        $location.url('/wishlist');
      }
    }); // end PlantService
  }; // end savePlantSpecs

  vm.displayPlantDetails = function() {
    var id = $routeParams.id;
    console.log('in displayPlantDetails:', id);
    PlantService.displayPlantDetails( id ).then(function( data ){
      console.log( data );
      vm.plant = data;
    }); // end PlantService
  }; // end displayPlantDetails

  vm.updatePlantSpecs = function() {
    // var plant = vm.plantsToDisplay[index];
    // var id = plant._id;
    var id = $routeParams.id;
    updatedPlantSpecs = {
      common_name: vm.plant.common_name,
      life_form: vm.plant.life_form,
      exposure: vm.plant.exposure,
      height: vm.plant.height,
      width: vm.plant.width,
      flower_color: vm.plant.flower_color,
      bloom_time: vm.plant.bloom_time,
      mn_native: vm.plant.mn_native,
      list: vm.plant.list,
      notes: vm.plant.notes,
      picture: vm.plant.picture
    };
    PlantService.updatePlantSpecs( id, updatedPlantSpecs ); // end PlantService
  }; // end updatePlantSpecs

  vm.deletePlant = function(list) {
    console.log(list);
    var id = $routeParams.id;
    PlantService.deletePlant(id).then(function() {
      if (list === 'garden list') {
        $location.url('/plants');
      }
      else {
        $location.url('/wishlist');
      }
    });
  }; // end deletePlant

  // vm.deletePlantFromWishList = function() {
  //   var id = $routeParams.id;
  //   PlantService.deletePlant(id);
  //   $location.url('/wishlist');
  // }; // end deletePlant

  // vm.life_form = [
  //   {id: 1, text: 'Ferns and Wildflowers'},
  //   {id: 2, text: 'Grasses, Sedges and Rushes'},
  //   {id: 3, text: 'Trees and Shrubs'},
  //   {id: 4, text: 'Vines'}
  // ];

}); // end TypeaheadController
