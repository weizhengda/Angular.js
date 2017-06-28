/**
 * Created by Administrator on 2016/8/17 0017.
 */
angular.module('myApp.controller',['myApp.services'])

    .controller('firstController',function($scope,itemsService,$location){

        $scope.items=itemsService.getAll();

        // absURl();

        /*$location*/

        console.log($location.absUrl());   /*获取url*/

      $location.hash('news');
        /*
        http://localhost:50539/angularjs_wwwroot/angualrjs%20location/angularjs%20location.html##news
        * */

       // $location.path('/news/123');  /*改变URL*/

      //  $location.search({username:'zhangsan',age:'20'});









    })
    .controller('secondController',function($scope,itemsService){
        $scope.items=itemsService.getAll();

        $scope.name='李四';
    })

