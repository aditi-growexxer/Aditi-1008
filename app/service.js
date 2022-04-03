//services
app.service('userService', function ($http) {
    this.users = [];
    this.getUsers = function (cb) {
        if (this.users.length == 0) {
            $http.get("https://gorest.co.in/public/v2/users").then(function (response) {
                this.users = response.data;
                cb();
            }.bind(this));
        } else {
            cb();
        }
    };
    this.addUser = function (cb, user) {
        this.users.push(user);
        cb();
    }
});

app.service('employeeService', function () {
    this.employees = [];
    this.getEmployees = function (cb) {
        if (this.employees.length == 0) {
            this.employees = [
                {
                    firstname: "aditi",
                    lastname: "bamaniya",
                    email: "aditi@gmail.com",
                    phone: "1234567989",
                    dob: new Date("2000-02-12"),
                    salary: "10000",
                }];
            cb();
        } else {
            cb();
        }
    };
    this.addEmployee = function (cb, emp) {
        this.employees.push(emp);
        cb();
    }
});