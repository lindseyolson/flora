// DROP DOWN SHOW OPTION
vm.showLifeForm = function (plant) {
  console.log(plant);
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



// DROP DOWN OPTIONS
  vm.life_form = [
    {id: 1, text: 'Ferns and Wildflowers'},
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
