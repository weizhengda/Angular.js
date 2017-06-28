/**
 * Created by Administrator on 2017/2/24 0024.
 */
angular.module('myAppServices',[])

//
.service('newsServices',function($http){

       return {
            requestListData:function(callback){  /*请求数据*/

                //console.log('111');
                //http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1&page=1&callback=JSON_CALLBACK

                var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";

                $http.jsonp(url).then(function(data){
                    console.log(data);

                     callback(data);  /*回调传参*/

                })


            },requestContentData:function(aid,callback){   /*请求新闻详情数据*/

               //http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=492
               var url="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid+"&callback=JSON_CALLBACK"

               $http.jsonp(url).then(function(data){
                   console.log(data);

                   callback(data);  /*回调传参*/

               })
            }
       }

})
