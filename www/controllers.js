'use strict';

var banditsApp = angular.module('banditsApp', ['ngRoute']);

banditsApp.controller('infoCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('video.json').success(function(data, status, headers, config){
		$scope.videos = data;
	});

	$http.get('bandits.json').success(function(data, status, headers, config){
		$scope.bandits = data;
	});


}]);

banditsApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
  $routeProvide
      .when('/',{
        templateUrl:'templates/home.html',
        controller:'infoCtrl'
      })
      .when('/contacts', {
      	templateUrl: 'templates/contacts.html',
      	controller: 'contactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

banditsApp.controller('contactsCtrl', [function () {}]);