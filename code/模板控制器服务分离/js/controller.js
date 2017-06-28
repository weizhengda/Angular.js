/**
 * Created by Administrator on 2017/6/27 0027.
 */
//所有的控制器放在这个里面
angular.module('myAppController',[])



.controller('HomeController',function($scope,Storage){

     $scope.msg='这是home页面';

        Storage.set();
})


.controller('NewsController',function($scope){

    $scope.msg='这是NewsController页面';

    $scope.list=['1','2','3']
})

.controller('NewsConController',function($scope,$routeParams){

    console.log($routeParams);

    $scope.aid=$routeParams.aid;

})