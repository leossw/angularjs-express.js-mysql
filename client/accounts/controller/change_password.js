angular.module('mobilecare').controller('ChangePSWCtrl',
	['$scope','$http','$mdDialog','$cookies','$state',function ($scope,$http,$mdDialog,$cookies,$state){
    
    var vm = this;
    vm.currentUserName = $cookies.get('currentUserName');
    vm.errorMessage = '';
    vm.oldPassword = '';
    vm.newPassword = '';
    vm.newPasswordConfirm = '';

//修改密码
    vm.changePassword = function (){
    	$http.post('/api/changePassword',{userName:vm.currentUserName,oldPassword:vm.oldPassword,newPassword:vm.newPassword})
    		.success(function (data){
    			if(data == '原密码不正确'){
    				vm.errorMessage = data;
    				vm.showAlert();
    			}
    			else if(data == '修改成功,请重新登陆'){
    				vm.errorMessage = data;
    				vm.showAlert();
    				$state.go('login');
    			}
    		})
    		.error(function (data){
    			console.log('无法修改密码');
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