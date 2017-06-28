/**
 * Created by Administrator on 2017/2/23 0023.
 */

angular.module('adminAppController',[])


.controller('userController',function($scope,$Storage){
   /*显示隐藏*/
    $scope.isAddShow=false;
    $scope.isEditShow=false;


   //获取数据

   var list=$Storage.get('userlist');
   if(list){
       $scope.list=list;
   }else{
       $scope.list=[];
   }





   //定义双向数据绑定的的数据
     $scope.userinfo={
         username:'',
         name:'',
         email:'',
         score:''

     }

    /*增加框显示*/
    $scope.addData=function(){

        $scope.isAddShow=true;
    }
   //写入数据
    $scope.doAddData=function(){

        $scope.list.push({
            username:$scope.userinfo.username,
            name:$scope.userinfo.name,
            email:$scope.userinfo.email,
            score:$scope.userinfo.score
        })

        $Storage.set('userlist',$scope.list);

        $scope.isAddShow=false;

    }

//删除数据
$scope.delData=function(index){

    $scope.list.splice(index,1);  /*删除*/


    //删除后保存
    $Storage.set('userlist',$scope.list);


}

    /*修改*/

/*定义编辑的数据*/
$scope.editUserinfo={
    index:'',
    username:'',
    name:'',
    email:'',
    score:''
}

$scope.editData=function(index){

    $scope.isEditShow=true;
    var editUserinfo= $scope.list[index];
    //绑定数据
    $scope.editUserinfo={
        index:index,
        username:editUserinfo.username,
        name:editUserinfo.name,
        email:editUserinfo.email,
        score:editUserinfo.score
    }
 //   $scope.editUserinfo= {username: "zhangsan", name: "张三", email: "11111@qq.com", score: "12"}
 //
 //   alert(index);
}
/*修改保存*/
$scope.doEditData=function(index){
    $scope.list[index]={
        username:$scope.editUserinfo.username,
        name:$scope.editUserinfo.name,
        email:$scope.editUserinfo.email,
        score:$scope.editUserinfo.score

    }
    //修改后保存数据
    $Storage.set('userlist',$scope.list);

    $scope.isEditShow=false;


}




    /*隐藏增加和编辑*/
    $scope.hideDialog=function(){
        $scope.isAddShow=false;
        $scope.isEditShow=false;
    }



})