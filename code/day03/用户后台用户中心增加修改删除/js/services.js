/**
 * Created by Administrator on 2017/2/23 0023.
 */
angular.module('adminAppService',[])


    .service('$Storage',function(){
       return{
           set:function(key,value){

                    localStorage.setItem(key,JSON.stringify(value));

           },
           get:function(key){

              return JSON.parse(localStorage.getItem(key));

           },
           del:function(key){

               localStorage.removeItem(key)

           }
       }

    })