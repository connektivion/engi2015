Engi.controller('LeafController', function($http,$rootScope,$scope, $timeout, $location,$routeParams) {
	$scope.misc.leafCheck++;
	$scope.misc.wasLeaf = true;1

	$timeout(function() {
		$("body").removeClass("avgrund-active");
	}, 365);

	$scope.init = function(){
		var name;
		$scope.show = 'final-event';
		var back = $routeParams.id;
		if($location.$$path=='/CA'||$location.$$path=='/sponsors'||$location.$$path=='/about'||$location.$$path=='/engiconnect'){
			name = $location.$$path.substring(1);
			if($location.$$path=='/sponsors'||$location.$$path=='/about'){
				$scope.show = $location.$$path.substring(1);
			}
			if($location.$$path=='/CA'){
				$scope.showCAForm = true;
			}
		}
		else{
			name = $location.$$path.substring(1,$location.$$path.length-back.length-1);
			if(name!='technites')
				$scope.showRegisterForm = true;
		}
		/*$http.get('./json/'+name+'.master.json').then(function(msg){
			if(msg.data.length){
				for(i=0;i<msg.data.length;i++){
					if(msg.data[i].link==$routeParams.id)
						$scope.page = msg.data[i];
				}
			}
		});*/
		$scope.page = {"name":"robo wars","link":"robowars","banner":"robowars.jpg","subdesc":[{"subtitle":"overview","subdescription":"robots fight its cool","subimage":"pic1.jpg"},{"subtitle":"time","subdescription":"12-08-12","subimage":""}],"list":[{"title":"bot","items":["ightw","power","size"]},{"title":"arena","items":["should not break","should fit"]}],"subimage":[{"title":"pic3.jpg","link":"pic4.jpg"}]}
	}

	$scope.init();

	$scope.closeLeaf = function(){
		
		$scope.misc.leafCheck=0;
		$rootScope.back();
	}
});