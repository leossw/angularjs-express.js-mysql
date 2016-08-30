angular.module('mobilecare').controller('UserCtrl',
	['$scope','$state','$cookies','$state',function ($scope,$state,$cookies,$state){
    
    var vm = this;

    vm.userType = $cookies.get('currentUserType');
    vm.userName = $cookies.get('currentUserName');
    vm.userNickname = $cookies.get('currentUserNickname');

//获取当前用户类型
	vm.isPatient = (vm.userType == '01')? true : false;    
//	vm.isGuardian = (vm.userType == '02')? true : false;

//跳转到个人信息界面
    vm.goToPersonalInfo = function (){
    	if(vm.isPatient){
    		$state.go('personalinfopatient');
    	}
    	else{
    		$state.go('personalinfoguardian');
    	}
    }

//跳转到功能页面
	vm.goHome = function (){
		if(vm.isPatient){
			$state.go('homepatient');
		}
		else{
			$state.go('homeguardian');
		}
	}
}]);