//Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/app/pages/login.html',
            controller: 'authController'
        }).when('/dashboard', {
            templateUrl: '/app/pages/dashboard.html',
        }).otherwise({
            redirectTo: '/login'
        });
});

