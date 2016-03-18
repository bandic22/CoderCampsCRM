var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AdminService = (function () {
            function AdminService($resource) {
                this.$resource = $resource;
                this.adminResource = $resource("/api/admin");
            }
            AdminService.prototype.getUserResource = function () {
                return this.adminResource.query().$promise;
            };
            return AdminService;
        })();
        Services.AdminService = AdminService;
        angular.module("MyApp").service("adminService", AdminService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
