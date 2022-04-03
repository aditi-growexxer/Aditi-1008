// components
app.component("headerComponent", {
    templateUrl: "app/components/include/header.component.html",
    bindings: {
        
    },
    controller: function ($window, $scope, $location) {
        this.logout = function () {
            $window.sessionStorage.setItem("isAuth",false);
            $location.path("/login");
        };
    }
});

app.component("sidebarComponent", {
    templateUrl: "app/components/include/sidebar.component.html",
    bindings: {
        
    },
    controller: function ($scope) {
        $scope.menu = [
            {
                "title": "Dashboard",
                "link": "#!/dashboard",
                "icon": "mdi mdi-grid-large"
            },
            {
                "title": "Employees List",
                "link": "#!/employees_list",
                "icon": "mdi mdi-card-text-outline"
            },
            {
                "title": "Create New Employee",
                "link": "#!/create_new_employee",
                "icon": "mdi mdi-layers-outline"
            }
        ];
    }
});

app.component("footerComponent", {
    templateUrl: "app/components/include/footer.component.html",
    bindings: {
        
    },
    controller: function () {
    }
});