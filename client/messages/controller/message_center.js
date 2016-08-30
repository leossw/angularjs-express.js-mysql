angular.module('mobilecare').controller('MessageCenterCtrl',
	['$scope','$state','$http','$cookies',function ($scope,$state,$http,$cookies){
    
    var vm = this;

    vm.messageCount = 0;
    vm.messageGuardianPatient = 0;
    vm.messageDoctor = 0;
    vm.messageAlert = 0;
    vm.messageSystem = 0;
    vm.userType = $cookies.get('currentUserType');
    vm.isPatient = (vm.userType == '01')? true : false;

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

//跳转到功能页面
	vm.goHome = function (){
		if(vm.userType == '01'){
			$state.go('homepatient');
		}
		else if(vm.userType == '02'){
			$state.go('homeguardian');
		}
	}
}]);