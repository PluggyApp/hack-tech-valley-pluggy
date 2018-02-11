angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('oAuthRegistration', {
    url: '/OAuthRegistration',
    templateUrl: 'templates/oAuthRegistration.html',
    controller: 'oAuthRegistrationCtrl'
  })

  .state('registration', {
    url: '/page13',
    templateUrl: 'templates/registration.html',
    controller: 'registrationCtrl'
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('loading', {
    url: '/Loading',
    templateUrl: 'templates/loading.html',
    controller: 'loadingCtrl'
  })

  .state('dashBoard', {
    url: '/DashBoard',
    templateUrl: 'templates/dashBoard.html',
    controller: 'dashBoardCtrl'
  })

  .state('entrepreneurOnboarding', {
    url: '/EntrepreneurOnboarding',
    templateUrl: 'templates/entrepreneurOnboarding.html',
    controller: 'entrepreneurOnboardingCtrl'
  })

  .state('residentOnboarding', {
    url: '/ResidentOnboarding',
    templateUrl: 'templates/residentOnboarding.html',
    controller: 'residentOnboardingCtrl'
  })

  .state('result', {
    url: '/Result',
    templateUrl: 'templates/result.html',
    controller: 'resultCtrl'
  })

$urlRouterProvider.otherwise('/Loading')


});