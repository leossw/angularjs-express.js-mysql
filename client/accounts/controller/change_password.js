angular.module('mobilecare').controller('ChangePSWCtrl',
	['$scope','$http','$mdDialog','$cookies','$state',function ($scope,$http,$mdDialog,$cookies,$state){
    
    var vm = this;
    vm.currentUserName = $cookies.get('currentUserName');    //获取当前用户名
    vm.errorMessage = '';
    vm.oldPassword = '';	//原密码
    vm.newPassword = '';	//新密码
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
    				$state.go('login');		//密码修改成功后跳转至登陆页面
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