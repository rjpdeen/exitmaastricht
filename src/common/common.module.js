(function(){
'use strict'

angular.module('common', [])
.config(config)
.constant('ApiPath', 'https://rjpdeen.github.io/wieisdemol-2018');

config.$inject = ['$httpProvider'];
function config(httpProvider){
	httpProvider.interceptors.push('loadingHttpInterceptor');
}


})();