var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ContactEditController = (function () {
            function ContactEditController(contactService, $route, $uibModalInstance, companiesService, contact) {
                this.contactService = contactService;
                this.$route = $route;
                this.$uibModalInstance = $uibModalInstance;
                this.companiesService = companiesService;
                this.contact = contact;
                this.companies = this.companiesService.getCompanies();
                this.contactToEdit = this.contact;
                debugger;
            }
            ContactEditController.prototype.editContact = function () {
                var _this = this;
                this.contactService.addContact(this.contactToEdit).then(function () {
                    _this.closeModal();
                    _this.$route.reload();
                });
            };
            ContactEditController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
            };
            return ContactEditController;
        })();
        Controllers.ContactEditController = ContactEditController;
        angular.module("MyApp").controller("contactEditController", ContactEditController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=contactEditController.js.map