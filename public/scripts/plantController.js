app.controller( 'PlantController', function( PlantService, $filter ) {
  var vm = this;
  vm.plantData = plantData;
  vm.plant = {
    life_form: 1,
    exposure: 1,
    mn_native: 1,
    grouping: 1
  };

  vm.showPlantSpecs = {

  }

  vm.displayPlants = function() {
    console.log('in displayPlants');
      PlantService.displayPlants().then( function( data ) {
        vm.plantsToDisplay = data;
        console.log(data);
      }); // end PlantService
  }; // end displayPlants

  vm.savePlantSpecs = function() {
    console.log(vm.plant);
    var plantSpecs = vm.plant;
    PlantService.savePlantSpecs( plantSpecs ).then(function( response ) {
      console.log('from controller:', response);
    }); // end PlantService
  }; // end savePlantSpecs


  vm.showLifeForm = function (plant) {
    if (plant.life_form){
      var selected = $filter('filter')(vm.life_form, {
        id: plant.life_form
      });
      return selected.length ? selected[0].text : 'Not set';
    }
  }; // end showLifeForm

  vm.showExposure = function (plant) {
    if (plant.exposure){
      var selected = $filter('filter')(vm.exposure, {
        id: plant.exposure
      });
      return selected.length ? selected[0].text : 'Not set';
    }
  }; // end showExposure

  vm.showMnNative = function (plant) {
    if (plant.mn_native){
      var selected = $filter('filter')(vm.mn_native, {
        id: plant.mn_native
      });
      return selected.length ? selected[0].text : 'Not set';
    }
  }; // end showMnNative

  vm.showGrouping = function (plant) {
    if (plant.grouping){
      var selected = $filter('filter')(vm.grouping, {
        id: plant.grouping
      });
      return selected.length ? selected[0].text : 'Not set';
    }
  }; // end showExposure

  vm.updatePlantSpecs = function(index) {
    var plant = vm.plantsToDisplay[index];
    var id = plant._id;
    updatedPlantSpecs = {
      common_name: plant.common_name,
      life_form: plant.life_form,
      exposure: plant.exposure,
      height: plant.height,
      width: plant.width,
      flower_color: plant.flower_color,
      bloom_time: plant.bloom_time,
      mn_native: plant.mn_native,
      grouping: plant.grouping,
      notes: plant.notes
    };
    PlantService.updatePlantSpecs( id, updatedPlantSpecs ); // end PlantService
  }; // end updatePlantSpecs


  vm.life_form = [
    {id: 1, text: 'Ferns and Flowers'},
    {id: 2, text: 'Grasses, Sedges and Rushes'},
    {id: 3, text: 'Trees and Shrubs'},
    {id: 4, text: 'Vines'}
  ];

  vm.exposure = [
    {id: 1, text: 'full sun'},
    {id: 2, text: 'full sun, partial sun'},
    {id: 3, text: 'partial sun'},
    {id: 4, text: 'partial sun, full shade'},
    {id: 5, text: 'full shade'}
  ];

  // vm.flowerColor = [
  //   {id: 1, text: 'white'},
  //   {id: 2, text: 'black'},
  //   {id: 3, text: 'red'},
  //   {id: 4, text: 'orange'},
  //   {id: 5, text: 'yellow'},
  //   {id: 6, text: 'green'},
  //   {id: 7, text: 'blue'},
  //   {id: 8, text: 'purple'},
  //   {id: 9, text: 'pink'}
  // ];

  // vm.bloomTime = [
  //   {id: 1, text: 'early spring'},
  //   {id: 2, text: 'late spring'},
  //   {id: 3, text: 'early summer'},
  //   {id: 4, text: 'mid summer'},
  //   {id: 5, text: 'late spring'},
  //   {id: 6, text: 'early summer'}
  // ];

  vm.mn_native = [
    {id: 1, text: 'yes'},
    {id: 2, text: 'no'}
  ];

  vm.grouping = [
    {id: 1, text: 'garden list'},
    {id: 2, text: 'wish list'}
    ];


}); // end TypeaheadController
