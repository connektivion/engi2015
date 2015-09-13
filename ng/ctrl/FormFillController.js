Engi.controller('FormController', function($scope) {
	$scope.thumb  = {
		name:'',
		pic:'',
		link:'',
		description:''
	}

	$scope.mainpage = {
		name:'',
		link:'',
		banner:'',
		subdesc:[{subtitle:'',subdescription:'',subimage:''}],
		list:[{title:'',items:['']}],
		subimage:[{title:'',link:''}],
	}

	$scope.members = [{
		name:'',
		email:'',
		pic:'',
		post:'',
		comittee:'',
		classie:''
	}]

	$scope.addMoreMembers = function(){
		$scope.members.push({name:'',email:'',pic:'',post:'',comittee:'',classie:''});
	}

	$scope.deleteMembers = function(number){
		$scope.deleteMembers.splice(number,1);
	}

	$scope.addMoreLists = function(){
		$scope.mainpage.list.push({title:'',items:['']});
	};
	$scope.DeleteLists = function(number){
		$scope.mainpage.list.splice(number,1);
	}

	$scope.addMoreListItems = function(number){
		console.log(number)
		$scope.mainpage.list[number].items.push('');
	};
	$scope.DeleteListItems = function(number,number2){
		$scope.mainpage.list[number].items.splice(number2,1);
	}

	$scope.addMoreImages = function(){
		$scope.mainpage.subimage.push({title:'',link:''});
	};
	$scope.DeleteImages = function(number){
		$scope.mainpage.subimage.splice(number,1);
	}
	$scope.addMoreDesc = function(){
		$scope.mainpage.subdesc.push({subtitle:'',subdescription:'',subimage:''});
	}
	$scope.DeleteDesc = function(number){
		$scope.mainpage.subdesc.splice(number,1);
	}
})
