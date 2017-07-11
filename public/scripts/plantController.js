app.controller( 'PlantController', function( PlantService, filepickerService, $routeParams ) {
  var vm = this;
  vm.plantData = plantData;
  vm.plantsToDisplay = [];
  vm.plant = {};
  vm.displayPlant = {
    grouping: 1
  };

  vm.upload = function(){
    filepickerService.pick(
        {
            mimetype: 'image/*',
            language: 'en',
            services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH'],
            openTo: 'COMPUTER'
        },
        function(Blob){
            console.log(JSON.stringify(Blob));
            vm.selectedPlant.originalObject.picture = Blob;
            // vm.$apply();
        }
    );
  };

  vm.toggleShowForm = function() {
    vm.showForm = !vm.showForm;
  }; // end toggleShowForm

  vm.displayPlants = function() {
    console.log('in displayPlants');
      PlantService.displayPlants().then( function( data ) {
        vm.plantsToDisplay = data;
        console.log(data);
      }); // end PlantService
  }; // end displayPlants

  vm.savePlantSpecs = function() {
    vm.selectedPlant.originalObject.grouping = vm.grouping;
    var plantSpecs = vm.selectedPlant.originalObject;
    // plantSpecs.grouping = vm.grouping;
    console.log(plantSpecs);
    PlantService.savePlantSpecs( plantSpecs ).then(function( response ) {
      console.log('from controller:', response);
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
      grouping: vm.plant.grouping,
      notes: vm.plant.notes
    };
    PlantService.updatePlantSpecs( id, updatedPlantSpecs ); // end PlantService
  }; // end updatePlantSpecs

  vm.showMnNative = function(plant) {
    if (plant.mn_native === 'TRUE') {
      return 'yes';
    }
    else {
      return 'no';
    }
  }; // end showMnNative


  vm.grouping = [
    {id: 1, text: 'garden list'},
    {id: 2, text: 'wish list'}
    ];

  vm.life_form = [
    {id: 1, text: 'Ferns and Wildflowers'},
    {id: 2, text: 'Grasses, Sedges and Rushes'},
    {id: 3, text: 'Trees and Shrubs'},
    {id: 4, text: 'Vines'}
  ];






}); // end TypeaheadController
