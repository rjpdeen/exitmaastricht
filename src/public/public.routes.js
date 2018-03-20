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
    .state('public.deelnemer', {
      url: '/deelnemer/{deelnemerId}',
      templateUrl: 'src/public/home/home.deelnemer.html',
      controller: 'DeelnemerController',
      controllerAs: 'deelnemerCtrl',
      resolve: {
        deelnemer: ['$stateParams', 
            function($stateParams) {
              return $stateParams.deelnemerId;
            }
        ]
      }
    })
    .state('public.archief', {
      url: '/archief',
      templateUrl: 'src/public/archief/archief.html',
      controller: 'ArchiefController',
      controllerAs: 'archiefCtrl'
    })
    .state('public.archief.intro', {
      url: '/intro',
      templateUrl: 'src/public/archief/archief.intro.html',
      controller: 'IntroController',
      controllerAs: 'intoCtrl'
    })
    .state('public.archief.spelregels', {
      url: '/spelregels',
      templateUrl: 'src/public/archief/archief.spelregels.html',
      controller: 'SpelregelsController',
      controllerAs: 'spelregelsCtrl'
    })
    .state('public.archief.dag1', {
      url: '/dag1',
      templateUrl: 'src/public/archief/archief.dag1.html',
      controller: 'Dag1Controller',
      controllerAs: 'dag1Ctrl'
    })
    .state('public.archief.dag2', {
      url: '/dag2',
      templateUrl: 'src/public/archief/archief.dag2.html',
      controller: 'Dag2Controller',
      controllerAs: 'dag2Ctrl'
    })
    .state('public.archief.dag3', {
      url: '/dag3',
      templateUrl: 'src/public/archief/archief.dag3.html',
      controller: 'Dag3Controller',
      controllerAs: 'dag3Ctrl'
    })
    .state('public.archief.winnaar', {
      url: '/winnaar',
      templateUrl: 'src/public/archief/archief.winnaar.html',
      controller: 'WinnaarController',
      controllerAs: 'winnaarCtrl'
    })
    .state('public.archief.mol', {
      url: '/mol',
      templateUrl: 'src/public/archief/archief.mol.html',
      controller: 'MolController',
      controllerAs: 'molCtrl'
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
