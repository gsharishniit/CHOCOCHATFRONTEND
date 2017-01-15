/**
 * 
 */
var app= angular.module("myApp2",['ngRoute']);
app.config(function($routeProvider){
	//http://localhost8080
	$routeProvider
	.when('/',{
		templateUrl : 'ex2/views/home.html',
		controller:'HomeController'})
	.when('/blog',{
		templateUrl : 'ex2/views/blog.html',
		controller:'blogController'})
	.when('/friend',{
		templateUrl : 'ex2/views/friend.html',
		controller:'friendController'})
	.when('/job',{
		templateUrl : 'ex2/views/job.html',
		controller:'jobController'})
	
	.otherwise({redirectTo:'/'})

});
