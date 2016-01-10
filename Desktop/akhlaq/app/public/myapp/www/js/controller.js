angular.module('starter')
    .controller('loginCTRL', function ($http, $scope , $state) { 
        function aaa(){ 
            console.log('got it');           
        }
$http.get('/signup').then(aaa, aaa);      
        $scope.submit = function () {
            var scope = this;           
            $http({
                url: '/login',
                method: "POST",
                data: {
                    username: scope.username,
                    password: scope.password
                }
            }).then(function (success) {                    
      var b = success.data;
     console.log(b);
      localStorage.setItem("token" , b["usertoken"] )
                
                  $state.go('home', { data : JSON.stringify( success.data ) }   );
                              
            }, function (fail) {
                console.log("fail", fail);
            })
        }
    }).controller('signupCTRL', function ($http, $scope) {      
        
      $scope.submit = function () { 
     var scope = this;      
 var ref = new Firebase("https://salesman101.firebaseio.com/");
                        ref.createUser({
                        email    : scope.email,
                        password : scope.password
                        }, function(error, userData) {
                if (error) {
                console.log("Error creating user:", error);
                } else {
                console.log("Successfully created user account with uid:", userData); 
                $scope.sid = userData.uid; 
                
  $http({
                url: '/signup',
                method: "POST",
                data: {
                    username: scope.username,
                    email : scope.email,
                    password: scope.password,
                    sid  : $scope.sid
                }
            }).then(function (success) {
                console.log("success client", success);
            }, function (fail) {
                console.log("fail", fail);
            })    
                
                
                
                        }
                    });   
          
          
           
                 
                 
                  
      // firebaseSignUp (); 
      //  httpmongosignUp();               
        }       
        var httpmongosignUp = function(){       
           
        //    $http({
        //         url: '/signup',
        //         method: "POST",
        //         data: {
        //             username: scope.username,
        //             email : scope.email,
        //             password: scope.password,
        //             sid  : scope.sid
        //         }
        //     }).then(function (success) {
        //         console.log("success client", success);
        //     }, function (fail) {
        //         console.log("fail", fail);
        //     })            
        }   
      
   var firebaseSignUp = function(){      
//        var scope = this;      
//  var ref = new Firebase("https://amber-inferno-298.firebaseio.com/");
//             ref.createUser({
//             email    : "xxxxzzzz@firebase.com",
//             password : "correcthorsebatterystaple"
//             }, function(error, userData) {
//     if (error) {
//       console.log("Error creating user:", error);
//      } else {
//        console.log("Successfully created user account with uid:", userData); 
//       $scope.sid = userData.uid; 
//             }
//           });            
        }        
    }).controller('homeCTRL' , function($scope, $stateParams){           var a = $stateParams.data ;
       var b  =JSON.parse(a);
           $scope.data =   b.user[0];
     //  console.log(b["usertoken"]);
       
       localStorage.setItem("token" , b["usertoken"] )
       
       
    })

   