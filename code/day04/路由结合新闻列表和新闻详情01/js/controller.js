/**
 * Created by Administrator on 2017/2/24 0024.
 */
angular.module('myAppController',[])


// �����б�
.controller('newsLController',function($scope,$location){
        $scope.msg='news list'



})
// ��������  $routeParams��ȡurl��������ֵ
.controller('newsCController',function($scope,$routeParams){

        console.log($routeParams);

        $scope.msg='news newsCController'

})

