angular.module('myAppController',[])

.controller('loginController',function($scope,$location){


     $scope.go=function(){

       //$location.path('/newslist');

      $location.search({foo: 'yipee', baz: 'xoxo'});
     }


 })

.controller('newslistController',function($scope){


})

.controller('newscontentController',function($scope){


})