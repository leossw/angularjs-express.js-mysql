angular.module('mobilecare').controller('PersonalInfoPatientCtrl',
	['$scope','$state','$cookies','$http',function ($scope,$state,$cookies,$http){
    
    var vm = this;

    vm.countryCodes = '';
    vm.changeInfo = true;
    vm.registrar = $cookies.get('currentUserId');
    vm.maxbirthday = new Date();

    vm.patient = {
    	name: '',
    	sex: '',
    	birthday: vm.maxbirthday,
    	countryCode: '',
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
	$http.post('/api/getPatientInfo',{registrar:vm.registrar})
		.success(function (data){
//			console.log(data.birthday);
    		vm.patient.name = data.name;
    		vm.patient.sex = data.sex;
    		vm.patient.birthday = new Date(data.birthday);     //需要转换日期格式
    		vm.patient.countryCode = data.country_code;
    		vm.patient.certificateType = data.certificate_type_code;
    		vm.patient.idCard = data.identity_card;
    		vm.patient.fixedTel = data.phone;
    		vm.patient.mobilePhone = data.mobile;
    		vm.patient.email = data.email;
    		vm.patient.weChat = data.weixin;
    		vm.patient.address = data.address;
    		vm.patient.postalCode = data.postalcode;
    		vm.patient.height = data.height;
    		vm.patient.weight = data.weight;
    		vm.patient.bloodType = data.blood_type_code;
    		vm.patient.mainDisease = data.vital_signs;
		})
		.error(function (data){
			console.log('无法获取用户个人信息');
		});

//获取国籍代码
    $http.get('/api/CountryCode')
    	.success(function (data){
    		vm.countryCodes = data; 
    	}).error(function (data){
    		console.log('无法获取国籍列表');
    	});

//提交修改的信息
    vm.submitChangeInfo = function (){

    }
}]);