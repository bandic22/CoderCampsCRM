var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController(adminService) {
                var _this = this;
                this.adminService = adminService;
                this.sortReverse = false;
                this.currentPage = 1;
                this.maxSize = 10;
                this.itemsPerPage = 10;
                var usersGet = this.adminService.getUserResource().then(function (result) {
                    _this.users = result;
                    _this.totalItems = result.length;
                });
            }
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
