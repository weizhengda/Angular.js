/**
 * Created by Administrator on 2017/2/24 0024.
 */
angular.module('myAppController',[])


// 新闻列表
.controller('newsLController',function($scope,$location){
        $scope.msg='news list'



})
// 新闻详情  $routeParams获取url传过来的值
.controller('newsCController',function($scope,$routeParams){

        console.log($routeParams);

        $scope.msg='news newsCController'

})

