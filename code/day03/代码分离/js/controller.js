/**
 * Created by htzhanglong on 2017/2/22.
 */


angular.module('myAppController',[])

.controller('firstController',function($scope,NewsService){

    $scope.name=NewsService.msg;



})