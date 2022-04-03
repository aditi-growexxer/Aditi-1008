//controllers
app.controller("loginController", function ($scope, $location, $window) {
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

app.controller("employeesController", function ($scope, $location, $window, empServices) {
    if ($window.sessionStorage.getItem("isAuth") === "false") {
        $location.path("/login");
    }
    $scope.schema = {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string",
                "title": "First Name",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid First Name!"
            },
            "lastName": {
                "type": "string",
                "title": "Last Name",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid Last Name!"
            },
            "email": {
                "type": "string",
                "title": "Email",
                "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                "validationMessage": "Enter Valid Email!"
            },
            "dob": {
                "type": "object",
                "title": "Date of birth",
                "validationMessage": "Select Birthdate!"
            },
            "salary": {
                "type": "string",
                "title": "Salary",
                "pattern": "^[0-9]{1,8}$",
                "validationMessage": "Don't enter negative value!"
            },
        },
        "required": [
            "firstName",
            "lastName",
            "email",
            "dob",
            "salary"
        ]
    };
    $scope.form = [
        {
            "key": "firstName",
            "fieldHtmlClass": "form-control form-control-lg",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Aditi",
            "type": "text",
        },
        {
            "key": "lastName",
            "placeholder": "Enter Last Name",
            "fieldHtmlClass": "form-control form-control-lg",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Bamaniya",
            "type": "text",
        },
        {
            "key": "email",
            "fieldHtmlClass": "form-control form-control-lg",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "aditi.bamaniya@growexx.com",
            "type": "email",
        },
        {
            "key": "dob",
            "fieldHtmlClass": "form-control form-control-lg",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Select Date",
            "type": "date",
        },
        {
            "key": "salary",
            "fieldHtmlClass": "form-control form-control-lg",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "50000",
            "type": "text",
        },

        {
            type: "submit",
            title: "Save",
            "fieldHtmlClass": "btn btn-primary mt-3",
        }
    ];

    $scope.model = {};
    $scope.cb = function () {
        $scope.emps = empServices.emps;
    };
    if ($scope.emps == undefined) {
        empServices.getEmps($scope.cb);
    }


    $scope.onSubmit = function () {
        $scope.$broadcast('schemaFormValidate');
        empServices.addEmp($scope.cb, $scope.model);
        $location.path("employees_list");
    }

});
