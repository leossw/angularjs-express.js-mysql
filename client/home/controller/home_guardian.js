angular.module('mobilecare').controller('HomeGuardianCtrl',
	['$scope','$state','$mdDialog',function ($scope,$state,$mdDialog){
    
    var vm = this;

//添加监护患者
    vm.addPatientDialog = function (){

    }

       vm.openGuardianAddPatientDialog = function(){
      $mdDialog.show({
        controller: 'GuardianAddPatientCtrl',
        controllerAs: 'gapc',
        templateUrl: 'client/patients/views/guardian_add_patient.ng.html',
        clickOutsideToClose:true,
        resolve: {
          patients: function () {
            return $scope.patients;
          }
        }
      }).then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };
}]);