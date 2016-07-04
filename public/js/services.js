'use strict';

var app = angular.module('myApp');

app.service('Album', function ($http) {

  this.getAll = () => {
    return $http.get('api/albums')
  }

  this.addAlbum = albumObj => {
    return $http.post('api/albums', albumObj)
  }

  this.deleteAlbum = id => {
    return $http.delete(`api/albums/${id}`)
  }

  this.getAlbum = id => {
    return $http.get(`api/albums/${id}`)
  }
})
