/**
 * 
 */
var app= angular.module("chat",['ngRoute']);
app.config(function($routeProvider){
	//http://localhost8080
	$routeProvider  
	.when('/',{
		templateUrl : 'Home/landing.html',
		controller:'indexController'})
	.when('/home',{
		templateUrl : 'Home/home.html',
		controller:'HomeController'})
	.when('/blog',{
		templateUrl : 'Blog/blog.html',
		controller:'blogController'})
	.when('/friend',{
		templateUrl : 'Friend/friend.html',
		controller:'friendController'})
	.when('/job',{
		templateUrl : 'Jobs/job.html',
		controller:'jobController'})
	.when('/alumni',{
		templateUrl : 'user/alumni/alimni.html',
		controller:'alimniController'})
	.when('/admin',{
		templateUrl : 'user/admin/admin_home.html',
		controller:'adminController'})
	.when('/student',{
		templateUrl : 'user/student/Student.html',
		controller:'adminController'})	
	.otherwise({redirectTo:'/'})

});