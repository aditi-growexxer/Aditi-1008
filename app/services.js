//services
app.service('empServices', function ($http) {
    this.emps = [];
    this.getEmps = function (cb) {
        if (this.emps.length == 0) {
            $http.get("app/data.json").then(function (response) {
                this.emps = response.data;
                cb();
            }.bind(this));
        } else {
            cb();
        }
    };
    this.addEmp = function (cb, emp) {
        this.emps.push(emp);
        cb();
    }
});