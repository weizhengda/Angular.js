/**
 * Created by htzhanglong on 2017/2/22.
 */


angular.module('myAppController',[])


.controller('firstController',function($scope,NewsFactory){

    $scope.list='';

    $scope.getData=function(){

        $scope.list= NewsFactory.requestListData();


    }


})
