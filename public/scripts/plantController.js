app.controller( 'PlantController', function( PlantService ) {
  var vm = this;
  vm.plantData = plantData;

  vm.plant = {
    // common_name: 'common name',
    life_form: 1,
    exposure: 1,
    // height: 'height',
    // width: 'width',
    // flower_color: 'flower color',
    // bloom_time: 'bloom time'
    mn_native: 1
  };

  vm.savePlantSpecs = function() {
    console.log(vm.plant);
    var plantSpecs = vm.plant;
    PlantService.savePlantSpecs( plantSpecs ).then(function( response ) {
      console.log('from controller:', response);
    }); // end PlantService
  }; // end savePlantSpecs

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
  //
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


}); // end TypeaheadController
