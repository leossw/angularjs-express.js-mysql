angular.module('mobilecare').controller('GuardianVerificationCodeCtrl',
	['$scope','$http','$cookies',function ($scope,$http,$cookies){
    
    var vm = this;

    vm.registrar = $cookies.get('currentUserId');	//获取用户ID

//发送请求获取监护人授权码
    $http.post('/api/getGuardianVerificationCode',{registrar: vm.registrar})
    	.success(function (data){
//    		console.log(data);
    		vm.authorizationGuardianCode = data.authorization_guardian_verification_code;
    		vm.commonGuardianCode = data.common_guardian_verification_code;
    	})
    	.error(function (data){
    		console.log('无法获取监护人授权码');
    	});
}]);