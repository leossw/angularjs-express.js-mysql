angular.module('mobilecare').controller('LoginCtrl',
	['$state','$http','$mdDialog','$cookies',function ($state,$http,$mdDialog,$cookies){
	var vm = this;

//定义字符串
	vm.userName = '';
	vm.password = '';
    vm.errorMessage = '';  // 登录提示

    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+30);	  //定义cookies有效期30天


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
					vm.addCookies();
					$state.go('homepatient');
				}
				else if(data == '监护人用户'){
					vm.addCookies();
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

//登录成功，添加cookies
	vm.addCookies = function (){
		$http.post('/api/currentUserId',{userName:vm.userName})
			.success(function (data){
				$cookies.put('currentUserName',vm.userName,{'expires': expireDate});
    			$cookies.put('currentUserId',data.id,{'expires': expireDate});
    			$cookies.put('currentUserType',data.user_type,{'expires': expireDate});
    			$cookies.put('currentUserNickname',data.user_nicename,{'expires': expireDate});
//    			console.log(data);
//  			console.log(data.user_type);
//    			console.log(data.user_nicename);
			})
			.error(function (data){
				console.log('无法获取用户id');
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