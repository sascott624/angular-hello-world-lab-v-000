function MainController($scope){
  $scope.name = 'Savannah';
  $scope.hometown = 'Irvington';
}

angular
  .module('app')
  .controller('MainController', MainController);
