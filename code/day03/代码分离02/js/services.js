/**
 * Created by htzhanglong on 2017/2/22.
 */

angular.module('myAppService',[])


.factory('NewsFactory',function(){

    var news=[

        {'title':'新闻111'},
        {'title':'新闻2222'},
        {'title':'新闻3333'}
    ];

    return {
        requestListData:function(){

            return news;

        }

    }
})
