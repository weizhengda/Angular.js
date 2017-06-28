/**
 * Created by Administrator on 2017/2/24 0024.
 */
//使用ngRouter要依赖注入
var app=angular.module('myApp',['ngRoute','myAppController']);


//配置路由

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