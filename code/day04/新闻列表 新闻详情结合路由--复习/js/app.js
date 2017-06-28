/**
 * Created by Administrator on 2017/2/24 0024.
 */
//使用ngRouter要依赖注入
var app=angular.module('myApp',['ngRoute','myAppController']);


app.config(function($routeProvider){

    $routeProvider.when('/login',{
        templateUrl:'templates/login.html',
        controller:'loginController'
    }).when('/newslist',{
        templateUrl:'templates/newslist.html',
        controller:'newslistController'
    }).when('/newscontent/:aid',{
        templateUrl:'templates/newscontent.html',
        controller:'newscontentController'
    })
    .otherwise({
        redirectTo:'/login'

    })
})

