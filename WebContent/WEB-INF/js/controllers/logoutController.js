/**
 * 
 */app.controller('logoutController',function($scope,$rootScope){
	console.log("logout controller started");
	$scope.message="u r succesfully logout"
		$rootScope.isLoggedIn="false"
});