angular.module('mobilecare').controller('MessageCenterCtrl',
	['$scope','$state','$http',function ($scope,$state,$http){
    
    var vm = this;

    vm.messageCount = 0;
    vm.messageGuardianPatient = 0;
    vm.messageDoctor = 0;
    vm.messageAlert = 0;
    vm.messageSystem = 0;

//发送get请求，获取未读消息数量
/*  $http.get('/api/')
    	.success(function (data){
    		vm.messageCount = data[0];
    		vm.messageGuardianPatient = data[1];
   			vm.messageDoctor = data[2];
   			vm.messageAlert = data[3];
    		vm.messageSystem = data[4];
    	})
    	.error(function (data){
    		console.log('获取消息数量失败');
    	});
*/

}]);