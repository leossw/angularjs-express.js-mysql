angular.module('mobilecare').controller('RegisterCtrl',
	['$http','$state','$mdDialog','$cookies',function ($http,$state,$mdDialog,$cookies){
    
    var vm = this;
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+30);    //定义cookies有效期30天
//定义字符串
   	vm.userName = '';
    vm.password = '';
//    vm.passwordConfirm = '';
    vm.nickname = '';
    vm.userType = '';
    vm.errorMessage = '';    //定义错误信息
   

//注册成功，添加cookies
	vm.addCookies = function (){
		$http.post('/api/currentUserId',{userName:vm.userName})
			.success(function (data){
				$cookies.put('currentUserName',vm.userName,{'expires': expireDate});
    			$cookies.put('currentUserId',data[0].id,{'expires': expireDate});
    		//	console.log(data[0].id);
			})
			.error(function (data){
				console.log('无法获取用户id');
			});
	}

//注册函数，传递参数到服务器端，根据响应数据做出相应动作。
    vm.register = function (){
    	$http.post('/api/register/addUser',{userName:vm.userName,password:vm.password,nickname:vm.nickname,userType:vm.userType})
    		.success(function (data){
    			if(data == '用户名已存在'){
    				vm.errorMessage = data;
    				vm.showAlert();
    			}else if(data == '注册成功'){
    				vm.addCookies();
    				vm.errorMessage = data;
    				vm.showAlert();
    				if(vm.userType == 01){
    					$state.go('registernp');     //跳转至患者添加信息界面
    				}else{
    					$state.go('registerng');     //跳转至监护人添加信息界面
    				}
    			}
   			})
    		.error(function (data){
				console.log('连接服务器失败！');
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