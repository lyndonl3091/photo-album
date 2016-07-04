'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state, $rootScope) {
  console.log('mainCtrl!');
  $rootScope.albumView;
  console.log('mainCtrl albumView', $rootScope.albumView);

  $scope.createAlbum =() => {
    $state.go('albums')
  }

  $scope.goBack = () =>
  $state.go('albums')
});

// ******************************* /////
app.controller('albumCtrl', function($scope, $state, Album, $rootScope, $http) {
$scope.albums = [];

  Album.getAll()
  .then (res => {
    $scope.albums = res.data;
  })
  .catch(err => {
    console.log('getAll err:', err);
  })

  $scope.addAlbum = () => {
    var albumObj = {
      name: $scope.albumName,
      images: $scope.imageUrl
    }

    Album.addAlbum(albumObj)
    .then(res => {
      $scope.albums.push(res.data);
    })
  }

  $scope.deleteAlbum = index => {
    let id = $scope.albums[index]._id;
    // Album.deleteAlbum(id);

    swal({   title: "Are you sure?",   text: "You will not be able to recover the images in this album",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   closeOnConfirm: false },

    function () {
       Album.deleteAlbum(id)
       $scope.albums.splice(index, 1);
       swal("Deleted!", "Your album has been deleted", "success");
     });


     $scope.albums.splice(index, 1);

  }

  $scope.goTo = index => {
    let id = $scope.albums[index]._id
    Album.getAlbum(id)
    .then (res => {
      $rootScope.albumView = res.data;
      console.log('albumView:', $scope.albumView);
    })
    .catch(err => {
      console.log('albumView err:', err);
    })

    $state.go('albumView')
  }


});

// **************
