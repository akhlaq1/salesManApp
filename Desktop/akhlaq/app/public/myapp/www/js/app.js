// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'



angular.module('starter', ['ionic','firebase' ])
.run(function( $rootScope , $state){
    
 $rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){
    var token =  localStorage.getItem("token");
   if(token){
       console.log('got something');
       
   }
   else{       
       console.log('got no-something');
      //  $state.go('login');
        return
    
   }
   
})
})


.config(function($stateProvider, $urlRouterProvider){
  
$stateProvider
    .state('login', {
       url : '/login',
       templateUrl : 'templates/login.html',
       controller : 'loginCTRL'
    })
    
    .state('signUp', {
      url : '/signUp',
       templateUrl : 'templates/signUp.html',
       controller : 'signupCTRL'
    })
    .state('home', {
      url : '/home/:data',
       templateUrl : 'templates/home.html',
       controller : 'homeCTRL'
    })  ;
    $urlRouterProvider.otherwise('/login');
      
})
