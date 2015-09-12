

app.controller('LoginCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
    /*$scope.colors = ['bg-white', 'indigo', 'pink', 'red', 'amber', 'blue', 'green'];
    $scope.item = noteStorage.find($stateParams);
    $scope.$watch("item", function() {
      noteStorage.update($scope.item);
    }, true);

    $scope.removeItem = function(item){
      noteStorage.destroy(item);
      $state.go('app.note.list');
    }*/
    var ajxpin = 123;
    $scope.number = "9999222999";
    $scope.SendSMS = function(number){
      $scope.verifyphone = true;
    };

    $scope.VerifySMS = function(pin){
      if (true || pin == ajxpin){
          $state.go('app.restaurantList');
      }
    }
}]);
