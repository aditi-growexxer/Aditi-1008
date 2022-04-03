//Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/app/pages/login.html',
            controller: 'loginController'
        }).when('/dashboard', {
            templateUrl: '/app/pages/dashboard.html',
        }).when('/employees_list', {
            templateUrl: '/app/pages/employees_list.html',
            controller: 'employeesController'
        }).when('/create_new_employee', {
            templateUrl: '/app/pages/create_new_employee.html',
            controller: 'employeesController'
        }).otherwise({
            redirectTo: '/home'
        });
});

