'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('albums', { url: '/albums', templateUrl: '/html/albums.html', controller: 'albumCtrl' })
    .state('albumView', { url: '/albumView', templateUrl: '/html/albumView.html', controller: 'mainCtrl' })


  $urlRouterProvider.otherwise('/');
});
