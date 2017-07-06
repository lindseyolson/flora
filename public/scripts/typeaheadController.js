app.controller( 'TypeaheadController', function( $filter, $http ) {
  var vm = this;
  vm.plants = plantData;

  vm.user = {
    name: 'rose',
    lifeForm: 1
  };

  vm.lifeForm = [
    {id: 1, text: 'Ferns and Wildflowers'},
    {id: 2, text: 'Grasses, Sedges and Rushes'},
    {id: 3, text: 'Trees and Shrubs'},
    {id: 4, text: 'Vines'}
  ];

  vm.exposure = [
    {id: 1, text: 'full sun'},
    {id: 2, text: 'part sun'},
    {id: 3, text: 'full shade'}
  ];

  vm.height = [
    {id: 1, text: '1'},
    {id: 2, text: '2'},
    {id: 3, text: '3'}
  ];

  vm.width = [
    {id: 1, text: '1'},
    {id: 2, text: '2'},
    {id: 3, text: '3'}
  ];

  vm.flowerColor = [
    {id: 1, text: 'red'},
    {id: 2, text: 'yellow'},
    {id: 3, text: 'purple'}
  ];

  vm.bloomTime = [
    {id: 1, text: 'early spring'},
    {id: 2, text: 'late spring'},
    {id: 3, text: 'early summer'}
  ];

  vm.checkName = function(data) {
    if (data !== '') {
      return "You must submit a name!";
    }
  };

}); // end TypeaheadController
