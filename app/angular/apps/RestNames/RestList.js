

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
      { "Name":"Swagat Indian Cuisine", "Rating":5, "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520" },

      { "Name":"Indian Bazaar", "Rating":4, "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
      { "Name":"Milipatas", "Rating":3, "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg", "Address":"690 Glendale Ave, verdugo RD CA 94520"  },
      { "Name":"Delhi Darbar", "Rating":2, "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520"  },
      { "Name":"Zamzam Restaurant", "Rating":1, "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
        { "Name":"Swagat Indian Cuisine", "Rating":5, "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520" },

      { "Name":"Indian Bazaar", "Rating":4, "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
      { "Name":"Milipatas", "Rating":3, "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg", "Address":"690 Glendale Ave, verdugo RD CA 94520"  },
      { "Name":"Delhi Darbar", "Rating":2, "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520"  },
      { "Name":"Zamzam Restaurant", "Rating":1, "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
        { "Name":"Swagat Indian Cuisine", "Rating":5, "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520" },

      { "Name":"Indian Bazaar", "Rating":4, "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
      { "Name":"Milipatas", "Rating":3, "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg", "Address":"690 Glendale Ave, verdugo RD CA 94520"  },
      { "Name":"Delhi Darbar", "Rating":2, "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520"  },
      { "Name":"Zamzam Restaurant", "Rating":1, "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
        { "Name":"Swagat Indian Cuisine", "Rating":5, "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520" },

      { "Name":"Indian Bazaar", "Rating":4, "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
      { "Name":"Milipatas", "Rating":3, "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg", "Address":"690 Glendale Ave, verdugo RD CA 94520"  },
      { "Name":"Delhi Darbar", "Rating":2, "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520"  },
      { "Name":"Zamzam Restaurant", "Rating":1, "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
        { "Name":"Swagat Indian Cuisine", "Rating":5, "Min":"25 Rs", "Special" : "Pizza,Italian,chinese", "img":"family-restaurant.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520" },

      { "Name":"Indian Bazaar", "Rating":4, "Min":"34 Rs", "Special" : "chinese", "img":"sjfaskasd.jpg", "Address":"390 Monroe St, Santa Clara 95020"  },
      { "Name":"Milipatas", "Rating":3, "Min":"22 Rs", "Special" : "Italian,chinese", "img":"restaurant photo.jpg", "Address":"690 Glendale Ave, verdugo RD CA 94520"  },
      { "Name":"Delhi Darbar", "Rating":2, "Min":"54 Rs", "Special" : "chinese", "img":"rest2.jpg", "Address":"3205 Northwood Dr, #111 Concord CA 94520"  },
      { "Name":"Zamzam Restaurant", "Rating":1, "Min":"10 Rs", "Special" : "Pizza,Italian,chinese", "img":"restaurant-3-hotel-barcelo-maya-palace-deluxe54-10456.jpg", "Address":"390 Monroe St, Santa Clara 95020"  }
    ];
$scope.getNumber = function(num) {
    return new Array(num);   
}
//app.search.content

}]);
