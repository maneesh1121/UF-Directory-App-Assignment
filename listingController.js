angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.myVar = false;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.addListings = {
        "code" : $scope.code,
        "name" : $scope.name,
        "coordinates":{
        "latitude" : $scope.latitude,
        "longitude" : $scope.longitude
      },
      "address" : $scope.address
    };
      $scope.code = " ";
      $scope.name = " ";
      $scope.listings.push($scope.addListings);

    };
    $scope.deleteListing = function(index) {
      var idx = $scope.listings.indexOf(index);
      $scope.listings.splice(idx, 1);
    };
    $scope.showDetails = function(index) {
      $scope.myVar=true;
      var idx = $scope.listings.indexOf(index);
      var info = $scope.listings[idx];
      $scope._code = info.code;
      $scope._name = info.name;
      $scope._latitude = info.coordinates.latitude;
      $scope._longitude = info.coordinates.longitude;
      $scope._address = info.address;

    };
  }
]);
