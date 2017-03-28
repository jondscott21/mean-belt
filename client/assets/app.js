let app = angular.module('app', ['ngRoute', 'ngCookies']);
app.run(['$window', function ($window) {
    window.location.reload = function () {
        window.location.href = '/';
    }
}]);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'UserController',
            controllerAs: 'IC',
        })
        .when('/dashboard',{
            templateUrl: 'partials/main.html',
            controller: 'SurveyController',
            controllerAs: 'SC',
        })
        .when('/poll/:id', {
            templateUrl: 'partials/poll.html',
            controller: 'PollController',
            controllerAs: 'SC',
        })
        .when('/create', {
            templateUrl: 'partials/create.html',
            controller: 'SurveyController',
            controllerAs: 'SC',
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
});