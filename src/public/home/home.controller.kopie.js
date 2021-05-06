(function () {
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['DeelnemerService'];
function HomeController(DeelnemerService) {
	var $ctrl = this;

	$ctrl.deelnemers = [];
	$ctrl.promise = DeelnemerService.getDeelnemers()
	.then( function success (response) {
		$ctrl.deelnemers = response.data;
		console.log("deelnemers: ", $ctrl.deelnemers);
	});

	
}


}) ();