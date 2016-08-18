angular.module('mobilecare').controller('PatientInfoAddCtrl',
	['$scope','$http','$state','$mdDialog','$cookies',function ($scope,$http,$state,$mdDialog,$cookies){
    
    var vm = this;

    vm.maxbirthday = new Date();    //获取当前时间为出生日期最大值
    vm.errorMessage = '';

    vm.patient = {
    	serialNumber: setTimeToSerialNumber(),   //患者序列号？？(序列号不能重复,先用时间代替)
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
    	mainDisease: '',
    	registrar: $cookies.get('currentUserId'),
    	registerTime: formatDateTime(),
    	patientType: '01',    //默认患者类型01,个人患者(家庭患者)
        organizationId: '1',   // 默认当为:'个人（家庭）患者'时，organization_id为特定值"1"
        commonGuardianVerificationCode: getRandom(), // 普通监护人验证码
        authorizationGuardianVerificationCode: getRandom(), // 授权监护人验证码
        userId: '00',			//设定默认值00
        remark: ''
    }


//	console.log($cookies.get('currentUserName'));
//	console.log($cookies.get('currentUserId'));
 
//获取国籍代码
    $http.get('/api/CountryCode').success(function (data){
    	vm.countryCodes = data;  
    }).error(function (data){
    	console.log('无法获取国籍列表');
    });

//获取10位随机数为监护人验证码
    function getRandom(){
		var randomNum = Math.random();
		if(randomNum >= 0.1){
			return Math.floor(randomNum*10000000000);
		}
		else{
			return Math.floor((randomNum+0.1)*10000000000);
		}
	}

//时间转换成字符串，设置为serialNumber
	function setTimeToSerialNumber(){
		var time = new Date(),
			year = time.getFullYear(),
			month = time.getMonth()+1,
			day = time.getDate(),
			hour = time.getHours(),
			minute = time.getMinutes(),
			seconds = time.getSeconds();
		return year.toString()+(month>9?month:'0'+month)+(day>9?day:'0'+day)+(hour>9?hour:'0'+hour)+(minute>9?minute:'0'+minute)+(seconds>9?seconds:'0'+seconds);
	}

//转换日期格式
	function formatDateTime() {  
		var date = new Date();
   		var y = date.getFullYear();
   		var m = date.getMonth()+1;
    	m = m<10?('0'+m):m;
    	var d = date.getDate();
    	d = d<10?('0'+d):d;
   		var h = date.getHours();
    	var minute = date.getMinutes();
    	minute = minute<10?('0'+minute):minute;
    	var seconds = date.getSeconds();
    	seconds = seconds<10?('0'+seconds):seconds;
    	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+seconds;  
};  

//添加患者信息
    vm.addInfo = function (){
    	var patientInfo = {
    	serialNumber: vm.patient.serialNumber,
    	name: vm.patient.name,
    	sex: vm.patient.sex,
    	birthday: vm.patient.birthday,
    	countryCode: vm.patient.countryCode,
    	certificateType: vm.patient.certificateType,
    	idCard: vm.patient.idCard,
    	fixedTel: vm.patient.fixedTel,
    	mobilePhone: vm.patient.mobilePhone,
    	email: vm.patient.email,
    	weChat: vm.patient.weChat,
    	address: vm.patient.address,
    	postalCode: vm.patient.postalCode,
    	height: vm.patient.height,
    	weight: vm.patient.weight,
    	bloodType: vm.patient.bloodType,
    	mainDisease: vm.patient.mainDisease,
    	registrar: vm.patient.registrar,
    	registerTime: vm.patient.registerTime,
    	patientType: vm.patient.patientType,
        organizationId: vm.patient.organizationId,
        commonGuardianVerificationCode: vm.patient.commonGuardianVerificationCode, // 普通监护人验证码
        authorizationGuardianVerificationCode: vm.patient.authorizationGuardianVerificationCode, // 授权监护人验证码
        userId: vm.patient.userId,
        remark: vm.patient.remark
    	}

    	$http.post('/api/register/addPatientInfo',patientInfo)
    		.success(function (data){
    			if( data == '01'){
    				vm.errorMessage = '信息添加成功';
    				vm.showAlert();
    				$state.go('registernb');
    			}
    			else if(data == '02'){
    				vm.errorMessage = '信息添加失败';
    				vm.showAlert();
    			}
    		})
    		.error(function (data){
    			console.log('客户端请求失败，患者信息添加失败');
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