/**
 * Created by Administrator on 2017/6/27 0027.
 */

//模块
angular.module('myAppServices',[])


//这才是服务
.service('Storage',function(){

    return{

        set:function(){

            console.log('set');
        }
    }
})