//=====USER FACTORY=====//
app.factory('userFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let factory = {};
    factory.users = [];
    factory.user = {};
    factory.currentUser = {};
    factory.index = function (callback) {
        $http.get('/survey/1').then( function(data) {
            factory.users = data.data;
            return callback(factory.users)
        });
    };
    factory.create = function (newUser, callback) {
        factory.currentUser = newUser;
        $http.post('/survey/1', newUser).then(function (data) {
            factory.user = data.data;
            return callback(factory.user);
        })
    };
    factory.delete = function (delete_idx) {
        $http.delete('/survey/' + delete_idx)
    };
    return factory;
}]);
// //=====SURVEY FACTORY=====//
app.factory('surveyFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let factory = {};
    factory.index = function (callback) {
        $http.get('/survey/2').then( function(data) {
            factory.polls = data.data;
            return callback(factory.polls)
        });
    };
    factory.create = function (newPoll, callback) {
        console.log(newPoll);
        $http.post('/survey/2', newPoll).then(function (data) {
            factory.poll = data.data;
            return callback(factory.poll);
        })
    };
    factory.delete = function (delete_idx) {
        $http.delete('/survey/' + delete_idx)
    };
    factory.show = function (idx, callback) {
        $http.get('/survey/' + idx).then(function (data) {
            factory.poll = data.data;
            return callback(factory.poll);
        });
    };
    return factory;
}]);
