var Engi;

(function() {
	Engi = angular.module('Engi', ['ui.router','ngRoute']);
})();

(function() {

	Engi.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/events', {
			templateUrl: './views/modals.html',
		}).when('/workshop', {
			templateUrl: '../views/modals.html'
		}).when('/techspeaks', {
			templateUrl: '../views/modals.html'
		}).when('/technites', {
			templateUrl: '../views/modals.html'
		}).when('/hospitalities', {
			templateUrl: '../views/modals.html'
		}).when('/sponsors', {
			templateUrl: '../vsiews/modals.html'
		}).when('/ambassedors', {
			templateUrl: '../views/modals.html'
		}).when('/contact', {
			templateUrl: '../views/modals.html'
		}).when('/about', {
			templateUrl: '../views/modals.html'
		})
	}]);
})();

(function() {

	Engi.controller('MainController', function($scope, $location) {

		$scope.misc = {
			showModal:false,
		}
		$scope.showEvents = function(){
			$location.path('/events')
		}

})
})();