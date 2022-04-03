//controllers
app.controller("authController", function ($scope, $location, $window) {
    $scope.isAlert = true;

    if ($window.sessionStorage.getItem("isAuth") === "true") {
        // $location.path("/dashboard");
    }
    $scope.login = function () {

        if ($scope.uname == "admin" && $scope.pass == "password") {
            alert("Valid User");
        } else {
            alert("Invalid Username & password");
        }
    }
});


