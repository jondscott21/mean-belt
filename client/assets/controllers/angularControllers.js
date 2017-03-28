//=====USER CONTROLLER=====//
app.controller('UserController', ['userFactory', '$scope', '$routeParams', '$cookies', '$location', function (userFactory, $scope, $routeParams, $cookies, $location) {
    // $cookies.get($scope.user);
    // let login_check = function () {
    //     if ($scope.currentUser) {
    //         $location.url('/dashboard');
    //     }
    // };
    // login_check()
    let index = function () {
        userFactory.index(function (data) {
            $scope.users = data
        });
    };
    index();

    userFactory.loggedIn(function (user) {
        $scope.currentUser = user;
    });

    $scope.create = function () {
        userFactory.create($scope.user, function (data) {
            $scope.user = null;
            $scope.currentUser = data;
            $location.url('/dashboard');
            index();
        })
    };

}]);
//=====SURVEY CONTROLLER=====//
app.controller('SurveyController', ['surveyFactory', 'userFactory', '$scope', '$routeParams', '$location', function (surveyFactory, userFactory, $scope, $routeParams, $location) {
    // let login_check = function () {
    //     if (!$scope.currentUser) {
    //         $location.url('/');
    //     }
    // };
    // login_check();
    let index = function () {
        surveyFactory.index(function (data) {
            $scope.surveys = data
        });
    };
    index();
    userFactory.loggedIn(function (user) {
        $scope.currentUser = user;
    });
    $scope.create = function () {
        surveyFactory.create($scope.survey, $scope.currentUser, function (data) {
            console.log(data.errors);
            if (data.errors) {
                $scope.pollErrors = data.errors;
                // if (data.result.errors);
            }
            else {
                $scope.errors = '';
                $scope.survey = null;
                index();
            }

        })
    };
    $scope.delete = function (delete_idx) {
        surveyFactory.delete(delete_idx);
        index();
    };

}]);
//=====POLL CONTROLLER=====//
app.controller('PollController', ['surveyFactory', 'userFactory', '$scope', '$routeParams', '$location', function (surveyFactory, userFactory, $scope, $routeParams, $location) {
    // let login_check = function () {
    //     if (!$scope.currentUser) {
    //         $location.url('/');
    //     }
    // };
    // login_check();
    let show = function () {
        let idx = $routeParams.id;
        console.log(idx);
        surveyFactory.show(idx, function (data) {
            $scope.poll = data;
        })
    };
    show();
    userFactory.loggedIn(function (user) {
        $scope.currentUser = user;
    });
    $scope.vote = function (option, num) {
        surveyFactory.vote(option, num, function (data) {
            show();
        })
    };
}]);