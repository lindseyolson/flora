app.controller( 'TypeaheadController', function() {
  var vm = this;
  vm.plant = {
    name: 'Jack in the Pulpit'
};

app.controller('TypeaheadCtrl', function($scope) {
  $scope.user = {
    state: 'Arizona'
  };
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
});
  vm.plants = PLANT_DATA.common_name;
  vm.addPlant = function() {
    console.log('in controller: addPlant()');

  }; // end addPlant

}); // end TypeaheadController
