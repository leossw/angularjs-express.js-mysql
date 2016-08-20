angular.module('mobilecare').controller('PersonalInfoPatientCtrl',
	['$scope','$state','$cookies',function ($scope,$state,$cookies){
    
    var vm = this;

    vm.changeInfo = true;
    vm.patient.userName = $cookies.get('currentUserName');

    vm.patient = {
    	name: '',
    	sex: '',
    	birthday: vm.maxbirthday,
    	countryCode: '156',
    	certificateType: '',
    	idCard: '',
    	fixedTel: '',
    	mobilePhone: '',
    	email: '',
    	weChat: '',
    	address: '',
    	postalCode: '',
    	height: 0,
    	weight: 0,
    	bloodType: '',
    	mainDisease: ''
    }
//使用户可以修改个人信息
    vm.changeInfoStatus = function (){
    	vm.changeInfo = false;
    }

//获取用户个人信息
	$http.post('/api/getPatientInfo',{userName:vm.patient.userName})
		.success(function (data){
			console.log(data);
		})
		.error(function (data){

		});

//提交修改的信息
    vm.submitChangeInfo = function (){

    }
}]);