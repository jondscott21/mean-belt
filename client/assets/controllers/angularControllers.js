//=====USER CONTROLLER=====//
app.controller('UserController', ['userFactory', '$scope', '$routeParams', '$cookies', '$location', function (userFactory, $scope, $routeParams, $cookies, $location) {
    $scope.users = [];
    $scope.user = {};
    let index = function () {
        userFactory.index(function (data) {
            $scope.users = data
        });
    };
    index();
$scope.currentUser = userFactory.currentUser;
console.log($scope.currentUser);
$scope.create = function () {
    userFactory.create($scope.user, function (data) {
        $scope.user = null;
        $location.url('/dashboard');
        index();
    })
};


}]);
//=====SURVEY CONTROLLER=====//
app.controller('SurveyController', ['surveyFactory', '$scope', '$routeParams', function (surveyFactory, $scope, $routeParams) {
    let index = function () {
        surveyFactory.index(function (data) {
            $scope.surveys = data
        });
    };
    index();
    $scope.create = function () {
        surveyFactory.create($scope.survey, function (data) {
            $scope.survey = null;
            index()
        })
    };
    $scope.delete = function (delete_idx) {
        surveyFactory.delete(delete_idx);
        index();
    };
    let show = function () {
        let idx = $routeParams._id;
        surveyFactory.show(idx, function (data) {
            $scope.poll = data;
        })
    };
    show();
}]);
