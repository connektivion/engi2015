Engi.controller('RegisterController', function($http,$rootScope,$scope, $timeout, $location,$routeParams) {
	$scope.CAForm = false,
	$scope.RegisterForm = false;
	$scope.form = {
		name:'',
		number:'',
		email:'',
		friends:[]
	}
	$scope.addFriends = function(){
		$scope.form.friends.push({name:'',number:'',email:''});
	};

	$scope.removeFriends = function(number){
		$scope.form.friends.splice(number,1);
	}

	$scope.ca = {
		name:'',
		number:'',
		email:'',
		college:''
	}

	$scope.toggleCAForm = function(){
		if(!$scope.CAForm)
			$scope.CAForm = true;
		else 
			$scope.CAForm = false;
	}

	$scope.toggleRegisterForm = function(){
		if(!$scope.RegisterForm)
			$scope.RegisterForm = true;
		else 
			$scope.RegisterForm = false;
	}
	$scope.submitCA = function(){
		$scope.success = false;
		$scope.error = false;
		$http.post('mailer.php',{"name": $scope.ca.name,"number": $scope.ca.number,"email": $scope.ca.email,"college": $scope.ca.college})
		.success( function(data) {
			console.log(data.success)
			if ( data.success ) {
				$scope.success = true;
			} else {
				$scope.error = true;
			}
		});
	}

	$scope.submitForm = function(){
		
	}

})