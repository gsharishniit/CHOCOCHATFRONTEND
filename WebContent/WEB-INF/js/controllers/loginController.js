/**
 * 
 */

app.controller('loginController',function($scope,$rootScope){
	console.log("login controller started");
	$scope.message=" u successfully login in"
		$rootScope.isLoggedIn="true"
});