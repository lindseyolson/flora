app.controller( 'TypeaheadController', function( $filter ) {
  var vm = this;
  vm.plants = plantData;



  // vm.user = {
  //   name: 'awesome user'
  // };


// ---------------------------
  vm.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ];

  vm.user = {
    status: 2
  };

  vm.showStatus = function() {
      var selected = $filter('filter')(vm.statuses, {value: vm.user.status});
      return (vm.user.status && selected.length) ? selected[0].text : 'Not set';
    };
// ---------------------------


//   app.run(function(editableOptions) {
//   editableOptions.theme = 'bs3';
// });
//
//   vm.user = {
//     id: 1,
//     common_name: 'Asiatic Lily',
//     lifeForm: 'Ferns and Flowers'
//     // exposure: 'full sun',
//     // height: '2',
//     // width: '1',
//     // flowerColor: 'yellow',
//     // bloomTime: 'early summer'
//   };
//
//   vm.lifeForm = [
//     {id: 1, text: 'Ferns and Flowers'},
//     {id: 2, text: 'Grasses, Sedges and Rushes'},
//     {id: 3, text: 'Trees and Shrubs'},
//     {id: 4, text: 'Vines'}
//   ];
//
//   vm.exposure = [
//     {id: 1, text: 'full sun'},
//     {id: 2, text: 'part sun'},
//     {id: 3, text: 'full shade'}
//   ];
//
//   vm.height = [
//     {id: 1, text: '1'},
//     {id: 2, text: '2'},
//     {id: 3, text: '3'}
//   ];
//
//   vm.width = [
//     {id: 1, text: '1'},
//     {id: 2, text: '2'},
//     {id: 3, text: '3'}
//   ];
//
//   vm.flowerColor = [
//     {id: 1, text: 'red'},
//     {id: 2, text: 'yellow'},
//     {id: 3, text: 'purple'}
//   ];
//
//   vm.bloomTime = [
//     {id: 1, text: 'early spring'},
//     {id: 2, text: 'late spring'},
//     {id: 3, text: 'early summer'}
//   ];
//
//   vm.checkName = function(data) {
//     if (data !== '') {
//       return "You must submit a name!";
//     }
//   };

}); // end TypeaheadController
