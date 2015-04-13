// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('aquarium', ['ionic', 'aquarium.auth', 'aquarium.constants', 'aquarium.home'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.run(function(AuthService, $rootScope, $state) {

  
  $rootScope.$on('$stateChangeStart', function(event, toState) {

    
    // if (!AuthService.currentUserId && toState.name != 'login') {

      
    //   $state.go('login');
    // }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {




$ionicConfigProvider.tabs.position('bottom'); 


  $stateProvider


    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
      
      
    })

    .state('app.home', {
      url: '/home',
       views: {
        
        'app-home': {
  
          templateUrl: 'templates/home.html',
          controller:'HomeCtrl'
          
        }
      }
    })

    

    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'templates/login.html'
    })

   
  ;

  
  $urlRouterProvider.otherwise(function($injector) {
    $injector.get('$state').go('app.home'); 
  });


});

