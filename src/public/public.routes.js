(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .state('public.piet', {
      url: '/piet',
      templateUrl: 'src/public/home/piet.html',
      controller: 'PietController',
      controllerAs: 'pietCtrl'
    })
    .state('public.archief', {
      url: '/archief',
      templateUrl: 'src/public/archief/archief.html',
      controller: 'ArchiefController',
      controllerAs: 'archiefCtrl'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function(MenuService){
          return MenuService.getCategories();
        }]
      }
    });
}
})();
