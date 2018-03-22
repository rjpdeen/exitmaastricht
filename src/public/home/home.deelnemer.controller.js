(function () {
"use strict";

angular.module('public')
.controller('DeelnemerController', DeelnemerController);

DeelnemerController.$inject = ['deelnemer', 'DeelnemerService'];
function DeelnemerController(deelnemer, DeelnemerService) {
	var $ctrl = this;

	$ctrl.promise = DeelnemerService.getDeelnemers()
	.then( function success (response) {
		for (var i=0; i < response.data.length; i++){
			if (response.data[i].id == deelnemer){
				$ctrl.id = response.data[i].id;
				$ctrl.naam = response.data[i].naam;
				$ctrl.leeftijd = response.data[i].leeftijd;
				$ctrl.motivatie = response.data[i].motivatie;
				break;
			}
		}	
	});
}


}) ();