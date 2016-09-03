angular.module('mobilecare').controller('PhysiologyParameterCtrl',
	['$scope','$state','$interval','$http',function ($scope,$state,$interval,$http){
    
    var vm = this;

	//$interval(function (){vm.currentTime = formatDateTime()},1000);
	vm.currentTime = formatDateTime();

//时间格式化
	function formatDateTime() {  
		var date = new Date();
   		var y = date.getFullYear();
   		var m = date.getMonth()+1;
    	m = m<10?('0'+m):m;
    	var d = date.getDate();
    	d = d<10?('0'+d):d;
   		var h = date.getHours();
    	h = h<10?('0'+h):h;
    	var minute = date.getMinutes();
    	minute = minute<10?('0'+minute):minute;
    	return y + '-' + m + '-' + d+' '+h+':'+minute;  
	}
	
	$http.get('/api/getPhysiologyParameter')
		.success(function (data){
			console.log(data);
		})
		.error(function (data){
			console.log('无法获取生理参数');
		})
}]);