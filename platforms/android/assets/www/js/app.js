// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('aquarium', ['ionic','jrCrop', 'timer', 'aquarium.auth', 'aquarium.constants', 'aquarium.home', 'aquarium.games', 'aquarium.wash', 'aquarium.flash', 'aquarium.trash', 'aquarium.music'])


        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {

                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .run(function (AuthService, $rootScope, $state) {


            $rootScope.$on('$stateChangeStart', function (event, toState) {


                if (!AuthService.currentUserId && toState.name != 'login' && toState.name != 'register') {

                    event.preventDefault();
                    $state.go('login');
                }
                ;




            });
        })

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {




            $ionicConfigProvider.tabs.position('bottom');


            $stateProvider


                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'appCtrl'


                    })

                    .state('app.home', {
                        url: '/home',
                        views: {
                            'app-home': {
                                templateUrl: 'templates/home.html',
                                controller: 'homeCtrl'

                            }
                        }
                    })

                    .state('app.games', {
                        url: '/games',
                        cache: false,
                        views: {
                            'app-home': {
                                templateUrl: 'templates/games.html',
                                controller: 'homeCtrl'

                            }
                        }
                    })

                    .state('app.flash', {
                        url: '/flash',
                        cache: false,
                        views: {
                            'app-home': {
                                templateUrl: 'templates/flash.html',
                                controller: 'flashCtrl'

                            }
                        }
                    })

                    .state('app.trash', {
                        url: '/trash',
                        cache: false,
                        views: {
                            'app-home': {
                                templateUrl: 'templates/trash.html',
                                controller: 'trashCtrl'

                            }
                        }
                    })

                    .state('app.wash', {
                        url: '/wash',
                        cache: false,
                        views: {
                            'app-home': {
                                templateUrl: 'templates/wash.html',
                                controller: 'washCtrl'

                            }
                        }
                    })

                    .state('register', {
                        url: '/register',
                        cache: false,
                        controller: 'RegisterCtrl',
                        templateUrl: 'templates/register.html'
                    })


                    .state('login', {
                        url: '/login',
                        cache: false,
                        controller: 'LoginCtrl',
                        templateUrl: 'templates/login.html'
                    })







            $urlRouterProvider.otherwise(function ($injector) {
                $injector.get('$state').go('app.home');
            });


        });


