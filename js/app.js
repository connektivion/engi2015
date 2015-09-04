var Engi;

(function() {
	Engi = angular.module('Engi', ['ui.router','ngRoute']);
})();

(function() {

	Engi.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/events', {
			templateUrl: '../views/modal.html',
			controller: 'EventsController',
		}).when('/workshop', {
			templateUrl: '../views/modals.html'
		}).when('/techspeaks', {
			templateUrl: '../views/modals.html'
		}).when('/technites', {
			templateUrl: '../views/modals.html'
		}).when('/hospitalities', {
			templateUrl: '../views/modals.html'
		}).when('/sponsors', {
			templateUrl: '../views/modals.html'
		}).when('/ambassedors', {
			templateUrl: '../views/modals.html'
		}).when('/contact', {
			templateUrl: '../views/modals.html'
		}).when('/about', {
			templateUrl: '../views/modals.html'
		}).when('/', {
			templateUrl: '../index.html'
		})
	}]);
})();