(function(){
'use strict';

angular.module('public')
.component('menuCategory', {
	templateUrl: '/src/public/menu/menu-category/menu-category.html',
	bindings: {
		category: '<'
	}
})

})();