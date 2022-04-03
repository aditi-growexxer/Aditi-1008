//controllers
app.controller("authController", function ($scope, $location, $window) {
    $scope.isAlert = true;

    if ($window.sessionStorage.getItem("isAuth") === "true") {
        $location.path("/dashboard");
    }
    $scope.login = function () {

        if ($scope.uname == "admin" && $scope.pass == "password") {
            $window.sessionStorage.setItem("isAuth", true);
            $scope.isAuth = true;
            setTimeout(() => {
                $scope.isAlert = false;
            }, 2000);
            $location.path("dashboard");
        } else {
            alert("Invalid Username & password");
            setTimeout(() => {
                $scope.isAlert = true;
            }, 2000);
            $scope.isAlert = false;
        }
    }
});