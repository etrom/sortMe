'use strict';

angular.module('sortmeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',

]).use(favicon(__dirname + '/client/favicon.ico'))
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');


    $locationProvider.html5Mode(true);
  });