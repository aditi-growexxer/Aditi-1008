//Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/app/pages/login.html',
            controller: 'authController'
        }).otherwise({
            redirectTo: '/login'
        });
});

