/**
 * Created by Administrator on 2017/2/24 0024.
 */
angular.module('myAppController',[])


// 新闻列表
.controller('newsLController',function($scope,newsServices){
        $scope.msg='news list';



        newsServices.requestListData(function(rel){
                $scope.list=rel.data.result;
        });

})


// 新闻详情  $routeParams获取url传过来的值
.controller('newsCController',function($scope,$routeParams,newsServices,$sce){

        console.log($routeParams);

            var aid=$routeParams.id;
            newsServices.requestContentData(aid,function(rel){

                    console.log(rel);

                    $scope.item=rel.data.result[0];

                    $scope.item.content=$sce.trustAsHtml($scope.item.content);
            })

})

