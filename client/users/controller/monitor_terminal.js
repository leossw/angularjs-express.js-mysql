angular.module('mobilecare').controller('MonitorTerminalCtrl',
	['$scope','$http','$cookies',function ($scope,$http,$cookies){
    
    var vm = this;
    vm.registrar = $cookies.get('currentUserId');    //获取用户ID

    $http.post('/api/getMonitorTerminalInfo',{registrar: vm.registrar})
    	.success(function (data){
//    		console.log(data);
    		vm.serialNumber = data.serial_number;
    		vm.terminalName = data.name;
    		vm.firmwareVersionNumber = data.firmware_version;
    		vm.productionDate = data.production_date.slice(0,10);
    		vm.registerVerifiedCode = data.equipment_verification_code;
    		vm.monitorID = data.monitor_id;
    		vm.installTime = data.installation_time.slice(0,10);
    		vm.deviceStatus = data.device_status;
    		vm.bindingStatus = data.binding_status;
    	})
    	.error(function (data){
    		console.log('无法获取监控终端信息');
    	});
}]);