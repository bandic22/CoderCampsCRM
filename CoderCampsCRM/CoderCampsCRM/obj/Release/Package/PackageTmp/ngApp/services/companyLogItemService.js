var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CompanyLogItemService = (function () {
            function CompanyLogItemService($resource) {
                this.$resource = $resource;
                this.companyResource = $resource("api/companylogitems/:id");
                this.companyResourceFromCompany = $resource("api/companylogitems/company/:id");
            }
            CompanyLogItemService.prototype.listAllCompanyLogItems = function () {
                return this.companyResource.query();
            };
            CompanyLogItemService.prototype.getCompanyLogItemsById = function (id) {
                return this.companyResource.get({ id: id });
            };
            CompanyLogItemService.prototype.listCompanyLogItemsByCompanyId = function (id) {
                return this.companyResourceFromCompany.query({ id: id });
            };
            CompanyLogItemService.prototype.saveCompanyLogItem = function (companyToSave) {
                return this.companyResource.save(companyToSave).$promise;
            };
            CompanyLogItemService.prototype.deleteCompanyLogItem = function (id) {
                return this.companyResource.delete({ id: id }).$promise;
            };
            return CompanyLogItemService;
        })();
        Services.CompanyLogItemService = CompanyLogItemService;
        angular.module("MyApp").service("companyLogItemService", CompanyLogItemService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=companyLogItemService.js.map