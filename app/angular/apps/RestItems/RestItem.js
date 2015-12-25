

app.controller('RestItemsCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
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
      {
        "Main":"Appetizers",
        "Items":[{
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        }
        ]
      },

      {
        "Main":"Chicken",
        "Items":[{
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        }
        ]
      },

      {
        "Main":"Lamp",
        "Items":[{
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        },
        {
          "Name":"Spinach Pakoras",
          "Price":5.26,
          "Description":"Mild Chill patatose, hot chili pakaros",
          "Picture":"l_1808_pakora-00855956-CUT1.jpg",
          "Type":[ "Spicy","Normal"]
        }
        ]
      }

      ];
$scope.getNumber = function(num) {
    return new Array(num);   
}
//app.search.content

}]);
