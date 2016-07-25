angular.module('mobilecare').controller('LoginCtrl',
	['$state','$http','$mdDialog',function ($state,$http,$mdDialog){
	var vm = this;

//定义字符串
	vm.userName = '';
	vm.password = '';
    vm.errorMessage = '';  // 登录提示

//登陆函数
vm.login = function (){
	if(vm.userName == ''||vm.password == ''){
		vm.errorMessage = '用户名或密码不能为空';
		vm.showAlert();
		return;
	}else{
		$http.post('/api/login',{userName:vm.userName,password:vm.password})
			.success(function (data){
				if(data == '患者用户'){
					$state.go('homepatient');
				}
				else if(data == '监护人用户'){
					$state.go('homeguardian');
				}
				else{
					vm.errorMessage = data;
					vm.showAlert();
				}
			}).error(function (data){
				console.log('连接服务器失败！');
			});
	}
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