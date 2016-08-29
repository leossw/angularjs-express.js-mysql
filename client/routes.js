angular.module('mobilecare')
	.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: 'accounts/views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'lc'
		})
		.state('changepsw',{
			url: '/changepsw',
			templateUrl: 'accounts/views/change_password.html',
			controller: 'ChangePSWCtrl',
			controllerAs: 'cpswc'
		})
		.state('guardianinfoadd',{
			url: '/guardianinfoadd',
			templateUrl: 'accounts/views/guardian_info_add.html',
			controller: 'GuardianInfoAddCtrl',
			controllerAs: 'giac'
		})
		.state('patientinfoadd',{
			url: '/patientinfoadd',
			templateUrl: 'accounts/views/patient_info_add.html',
			controller: 'PatientInfoAddCtrl',
			controllerAs: 'piac'
		})
		.state('register',{
			url: '/register',
			templateUrl: 'accounts/views/register.html',
			controller: 'RegisterCtrl',
			controllerAs: 'rc'
		})
		.state('registernb',{
			url: '/registernb',
			templateUrl: 'accounts/views/register_nextstep_binding.html',
//			controller: 'RegisterNBCtrl',
//			controllerAs: 'rnbc'
		})
		.state('registerng',{
			url: '/registerng',
			templateUrl: 'accounts/views/register_nextstep_guardian.html',
//			controller: 'RegisterNGCtrl',
//			controllerAs: 'rngc'
		})
		.state('registernp',{
			url: '/registernp',
			templateUrl: 'accounts/views/register_nextstep_patient.html',
//			controller: 'RegisterNPCtrl',
//			controllerAs: 'rnpc'
		})
		.state('registertb',{
			url: '/registertb',
			templateUrl: 'accounts/views/register_terminal_binding.html',
//			controller: 'RegisterTBCtrl',
//			controllerAs: 'rtbc'
		})
		.state('cameramonitoring',{
			url: '/cameramonitoring',
			templateUrl: 'home/views/camera_monitoring.html',
//			controller: 'CameraMonitoringCtrl',
//			controllerAs: 'cmc'
		})
		.state('diagnosisinfo',{
			url: '/diagnosisinfo',
			templateUrl: 'home/views/diagnosis_info.html',
			controller: 'DiagnosisInfoCtrl',
			controllerAs: 'dic'
		})
		.state('guardianlist',{
			url: '/guardianlist',
			templateUrl: 'home/views/guardian_list.html',
			controller: 'GuardianListCtrl',
			controllerAs: 'glc'
		})
		.state('historyreview',{
			url: '/historyreview',
			templateUrl: 'home/views/history_review.html',
			controller: 'HistoryReviewCtrl',
			controllerAs: 'hrc'
		})
		.state('homeguardian',{
			url: '/homeguardian',
			templateUrl: 'home/views/home_guardian.html',
			controller: 'HomeGuardianCtrl',
			controllerAs: 'hgc'
		})
		.state('homepatient',{
			url: '/homepatient',
			templateUrl: 'home/views/home_patient.html',
//			controller: 'HomePatientCtrl',
//			controllerAs: 'hpc'
		})

		//需要订阅生理参数数据
		.state('physiologyparameter',{
			url: '/physiologyparameter',
			templateUrl: 'home/views/physiology_parameter.html',
			controller: 'PhysiologyParameterCtrl',
			controllerAs: 'ppc'
		})
		.state('trendchartreview',{
			url: '/trendchartreview',
			templateUrl: 'home/views/trend_chart_review.html',
//			controller: 'TrendChartReviewCtrl',
//			controllerAs: 'tcrc'
		})
		.state('trendmapreview',{
			url: '/trendmapreview',
			templateUrl: 'home/views/trend_map_review.html',
//			controller: 'TrendMapReviewCtrl',
//			controllerAs: 'tmrc'
		})
		.state('waveformreview',{
			url: '/waveformreview',
			templateUrl: 'home/views/waveform_review.html',
//			controller: 'WaveformReviewCtrl',
//			controllerAs: 'wrc'
		})
		.state('messagealert',{
			url: '/messagealert',
			templateUrl: 'messages/views/message_alert.html',
			controller: 'MessageAlertCtrl',
			controllerAs: 'mac'
		})
		.state('messagecenter',{
			url: '/messagecenter',
			templateUrl: 'messages/views/message_center.html',
			controller: 'MessageCenterCtrl',
			controllerAs: 'mcc'
		})
		.state('messagedoctor',{
			url: '/messagedoctor',
			templateUrl: 'messages/views/message_doctor.html',
			controller: 'MessageDoctorCtrl',
			controllerAs: 'mdc'
		})
		.state('messageguardianpatient',{
			url: '/messageguardianpatient',
			templateUrl: 'messages/views/message_guardianpatient.html',
			controller: 'MessageGuardianPatientCtrl',
			controllerAs: 'mgpc'
		})
		.state('messagesystem',{
			url: '/messagesystem',
			templateUrl: 'messages/views/message_system.html',
			controller: 'MessageSystemCtrl',
			controllerAs: 'msc'
		})
		.state('about',{
			url: '/about',
			templateUrl: 'users/views/about.html',
//			controller: 'AboutCtrl',
//			controllerAs: 'ac'
		})
		.state('guardianverificationcode',{
			url: '/guardianverificationcode',
			templateUrl: 'users/views/guardian_verification_code.html',
			controller: 'GuardianVerificationCodeCtrl',
			controllerAs: 'gvcc'
		})
		.state('monitorterminal',{
			url: '/monitorterminal',
			templateUrl: 'users/views/monitor_terminal.html',
			controller: 'MonitorTerminalCtrl',
			controllerAs: 'mtc'
		})
		.state('personalinfoguardian',{
			url: '/personalinfoguardian',
			templateUrl: 'users/views/personal_info_guardian.html',
			controller: 'PersonalInfoGuardianCtrl',
			controllerAs: 'pigc'
		})
		.state('personalinfopatient',{
			url: '/personalinfopatient',
			templateUrl: 'users/views/personal_info_patient.html',
			controller: 'PersonalInfoPatientCtrl',
			controllerAs: 'pipc'
		})
		.state('user',{
			url: '/user',
			templateUrl: 'users/views/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		});
	//设置首页
	$urlRouterProvider.otherwise('/login');
});
