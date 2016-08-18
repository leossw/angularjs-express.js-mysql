angular.module('mobilecare').controller('GuardianInfoAddCtrl',
	['$scope','$http','$state','$mdDialog','$cookies',function ($scope,$http,$state,$mdDialog,$cookies){
    
    var vm = this;
    vm.errorMessage = '';

	vm.guardian = {
		guardianType: '01',   //监护人类别默认01(普通监护人)
		name: '',
		sex: '',
		fixedTel: '',
		mobilePhone: '',
		email: '',
		wechat: '',
		address: '',
		postalCode: '',
        organizationId: '1',   // 默认organization_id为特定值"1"
        userId: $cookies.get('currentUserId')
	}

//添加监护人信息
	vm.addInfo = function (){
		var guardianInfo = {
			guardianType: vm.guardian.guardianType,
			name: vm.guardian.name,
			sex: vm.guardian.sex,
			fixedTel: vm.guardian.fixedTel,
			mobilePhone: vm.guardian.mobilePhone,
			email: vm.guardian.email,
			wechat: vm.guardian.wechat,
			address: vm.guardian.address,
			postalCode: vm.guardian.postalCode,
    	    organizationId: vm.guardian.organizationId,
        	userId: vm.guardian.userId
			}
		//发送监护人信息至后端
		$http.post('/api/register/addGuardianInfo',guardianInfo)
			.success(function (data){
				if(data == '01'){
					vm.errorMessage = '信息添加成功';
					vm.showAlert();
					$state.go('login');  //添加完基本信息跳转至登录页面
				}
				else if(data == '02'){
					vm.errorMessage = '信息添加失败';
					vm.showAlert();
				}
			})
			.error(function (data){
				console.log('客户端请求失败，监护人信息添加失败');
			});
	}

//弹出提示框
	vm.showAlert = function (){
		$mdDialog.show(
			$mdDialog.alert()
				.clickOutsideToClose(true)
				.textContent(vm.errorMessage)
				.ok('确定')
		);
	}

}]);