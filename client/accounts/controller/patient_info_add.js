angular.module('mobilecare').controller('PatientInfoAddCtrl',
	['$scope','$http','$state','$mdDialog','$cookies',function ($scope,$http,$state,$mdDialog,$cookies){
    
    var vm = this;

    vm.maxbirthday = new Date();    //获取当前时间为出生日期最大值
    vm.errorMessage = '';

    vm.patient = {
    	serialNumber: '00201600000000',   //患者序列号？？(先设置一个默认值)
    	name: '',
    	sex: '',
    	birthday: vm.maxbirthday,
    	countryCode: 156,
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
    	registerTime: vm.maxbirthday,
    	patientType: 01,    //默认患者类型01,个人患者(家庭患者)
        organization_id: 1,   // 默认当为:'个人（家庭）患者'时，organization_id为特定值"1"
        commonGuardianVerificationCode: '', // 普通监护人验证码
        authorizationGuardianVerificationCode: '', // 授权监护人验证码
        userId: '',
        remark: ''
    }
 //   console.log($cookies.get('currentUserName'));
 //   console.log($cookies.get('currentUserId'));
    //获取国籍代码
    $http.get('/api/CountryCode').success(function (data){
    	vm.countryCodes = data;  
    }).error(function (data){
    	console.log('无法获取国籍列表');
    });


    vm.addInfo = function (){

    }

}]);