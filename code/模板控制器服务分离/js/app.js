/**
 * Created by Administrator on 2017/6/27 0027.
 */
//路由配置的文件


var app=angular.module('myApp',['ngRoute','myAppController','myAppServices']);

//$routeProvider
app.config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl:'templates/home.html',  /*加载的模板*/

        controller:'HomeController'
    }).when('/news',{

        templateUrl:'templates/news.html',  /*加载的模板*/

        controller:'NewsController'
    }).when('/newscontent/:aid',{

        templateUrl:'templates/newscontent.html',  /*加载的模板*/

        controller:'NewsConController'
    }).otherwise({  /*找不到路由的时候动态跳转的页面*/
        redirectTo:'/home'
    })
})

