//=====USER FACTORY=====//
app.factory('userFactory', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {
    let currentUser;
    let factory = {};
    factory.users = [];
    factory.loggedIn = function (callback) {
        callback(currentUser);
    };

    factory.index = function (callback) {
        $http.get('/survey/1').then( function(data) {
            factory.users = data.data;
            return callback(factory.users)
        });
    };
    factory.create = function (newUser, callback) {
        $http.post('/survey/1', newUser).then(function (data) {
            currentUser = data.data;
            return callback(data.data);
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
            return callback(data.data)
        });
    };
    factory.create = function (newPoll, currentUser, callback) {
        let userPoll = {newPoll, currentUser};
        console.log(userPoll);
        $http.post('/survey/2', userPoll).then(function (data) {
            return callback(data.data);
        })
    };
    factory.delete = function (delete_idx) {
        $http.delete('/survey/' + delete_idx)
    };
    factory.show = function (idx, callback) {
        $http.get('/survey/' + idx).then(function (data) {
            return callback(data.data);
        });
    };
    factory.vote = function (option, num, callback) {
        console.log(num);
        let send = {option, num};
        $http.post('/survey/vote', send).then(function (data) {
            return callback(data.data);
        })
    };
    return factory;
}]);
