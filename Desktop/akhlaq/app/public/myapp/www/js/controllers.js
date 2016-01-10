angular.module('starter.controllers', ["ionic"])

.controller("loginCtrl",function($scope,$http,$state){
	$scope.user={}
	$scope.login = function (event){
		console.log($scope.user)
		$http.post("/api/signup",{data:$scope.user})
		.success(function(res){
			console.log(res)
			$state.go()
		})
		.error(function(err){
			console.log(err)
			
		})
	}
})

.controller("signupCtrl",function($scope, $http, $state){
	$scope.user={}
	$scope.userSignUp = function (event){
		console.log($scope.user)
		$http.post("/api/signup",{data:$scope.user})
		.success(function(res){
			console.log(res)
			$state.go()
		})
		.error(function(err){
			console.log(err)
			
		})
	}
})
