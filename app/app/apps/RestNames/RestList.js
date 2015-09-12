

app.controller('RestListCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
    /*$scope.colors = ['bg-white', 'indigo', 'pink', 'red', 'amber', 'blue', 'green'];
    $scope.item = noteStorage.find($stateParams);
    $scope.$watch("item", function() {
      noteStorage.update($scope.item);
    }, true);

    $scope.removeItem = function(item){
      noteStorage.destroy(item);
      $state.go('app.note.list');
    }*/
    var vm = $scope;
    vm.RestList = [
      { "Name":"Swagat Indian Cuisine", "Rating":"32", "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg" },

      { "Name":"Indian Bazaar", "Rating":"55", "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg"  },
      { "Name":"Milipatas", "Rating":"25", "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg"  },
      { "Name":"Delhi Darbar", "Rating":"35", "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg"  },
      { "Name":"Zamzam Restaurant", "Rating":"15", "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg"  }
    ];

//app.search.content

}]);
