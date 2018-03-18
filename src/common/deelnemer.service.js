(function(){
'use strict';

angular.module('common')
.service('DeelnemerService', DeelnemerService);


DeelnemerService.$inject = ['$http', 'ApiPath'];
function DeelnemerService($http, ApiPath){
	var service = this;

	service.getDeelnemers = function(){
		// console.log("pad: ", ApiPath + '/src/common/deelnemers.json');
		return $http.get(ApiPath + '/src/common/deelnemers.json');


		// var deelnemers = JSON.parse("src/common/deelnemers.json");
	};
}
}) ();