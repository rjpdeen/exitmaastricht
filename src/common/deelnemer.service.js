(function(){
'use strict';

angular.module('common')
.service('DeelnemerService', DeelnemerService);


DeelnemerService.$inject = ['$http', 'ApiPath'];
function DeelnemerService($http, ApiPath){
	var service = this;

	service.getDeelnemers = function(){
		return $http.get(ApiPath + '/src/common/deelnemers.json').then(function(response){
			return response.data;
		})

		// var deelnemers = JSON.parse("src/common/deelnemers.json");
	};
}
}) ();