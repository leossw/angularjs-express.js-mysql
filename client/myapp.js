var mc = angular.module('mobilecare',[
	'ui.router',
	'ngMaterial',
	'ngMessages',
	'validation.match',
	'ngCookies'
	]);

//配置svg图标
mc.config(function($mdIconProvider){
	$mdIconProvider
	.iconSet("social", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
	.iconSet("action", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
	.iconSet("navigation", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
	.iconSet("image", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg")
	.iconSet("av", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg")
	.iconSet("communication", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
	.iconSet("device", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-device.svg")
	.iconSet("content", "bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg");
}); 

  
/*
//代替ng-app="mobilecare",切换成手动启动应用。
function onReady(){
angular.bootstrap(document,['mobilecare'],{
	strictDi:true
	});                 
}
//页面加载完成后,再加载模块
angular.element(document).ready(onReady()); 
*/