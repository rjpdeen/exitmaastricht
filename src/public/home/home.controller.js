(function () {
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['DeelnemerService'];
function HomeController(DeelnemerService) {
	var $ctrl = this;

	$ctrl.deelnemers = DeelnemerService.getDeelnemers();
	console.log("deelnemers: ", $ctrl.deelnemers);
}


}) ();