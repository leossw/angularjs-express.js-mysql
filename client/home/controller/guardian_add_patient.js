angular.module('mobilecare').controller('GuardianAddPatientCtrl',
	['$scope','$state','$mdDialog',function ($scope,$state,$mdDialog){

	var vm = this;
	vm.errorMessage= '';
	vm.patientName = '';
	vm.verificationCode = '';





//关闭'添加患者'对话框
	vm.close = function (){
      $mdDialog.hide();
    }
}]);