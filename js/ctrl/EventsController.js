Engi.controller('EventsController', function($scope, $timeout, $location) {
	$scope.misc.showModal = true;
	$scope.turnOffModal = function(){
		$scope.misc.showModal = false;
		$location.path('/')
	}
	$scope.obj = [
		{
			title:'mech',
		},
		{
			title:'it',
		},
		{
			title:'chem',
		},
		{
			title:'comps',
		},
		{
			title:'civil',
		},
		{
			title:'mining',
		},


	]

})
