angular.module('mobilecare').controller('GuardianAddPatientCtrl',
	['$scope','$state','$mdDialog','$http',function ($scope,$state,$mdDialog,$http){

	var vm = this;
	vm.errorMessage= '';
	vm.patientName = '';
	vm.verificationCode = '';
	vm.guardianType = '';

	vm.addNewPatient = function (){
		$http.post('/api/addNewPatient',{patientName:vm.patientName,verificationCode:vm.verificationCode,guardianType:vm.guardianType})
			.success(function (data){
				console.log(data);
				if(data == 01){
					vm.errorMessage = '患者姓名不存在';
				}
				else if(data == 02){
					vm.errorMessage = '授权监护人验证码不正确';
				}
				else if(data == 03){
					vm.errorMessage = '普通监护人验证码不正确';
				}
			})
			.error(function (data){
				console.log('无法添加新患者');
			});
	}

//关闭'添加患者'对话框
	vm.close = function (){
      $mdDialog.hide();
    }
}]);