/**
 * Created by Administrator on 2017/2/24 0024.
 */
//ʹ��ngRouterҪ����ע��
var app=angular.module('myApp',['ngRoute','myAppController']);


//����·��

app.config(function($routeProvider){


    $routeProvider.when('/newslist',{
           templateUrl:'templates/newslist.html',
           controller:'newsLController'
    })
    .when('/newscontent/:id',{
        templateUrl:'templates/newscontent.html',
        controller:'newsCController'
    }).otherwise({
        redirectTo:'/newslist'

   })


})