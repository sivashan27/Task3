"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var forms_1 = require("@angular/forms");
var operation_1 = require("../company/operation");
var CompanyFormComponent = (function () {
    function CompanyFormComponent(_activatedRoute, _companyService, _router, fb) {
        this._activatedRoute = _activatedRoute;
        this._companyService = _companyService;
        this._router = _router;
        this.fb = fb;
        this.model = new operation_1.Operation();
        this.pageHeader = "Company Operation";
        //this.model = _company;
    }
    CompanyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.queryParams.subscribe(function (params) {
            _this.companyId = JSON.parse(params["companyid"]);
        });
        if (this.companyId != 0) {
            this.getCompanyOperation();
        }
        this.companyOperation = this.fb.group({
            companyname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            operatingcountry: [''],
            business: [''],
            customFields: this.fb.array([])
        });
    };
    CompanyFormComponent.prototype.getCompanyOperation = function () {
        var _this = this;
        this.pageHeader = "Edit Branch";
        this._companyService.getCompanyOperation(this.companyId).subscribe(function (operation) { return _this.model = operation; });
    };
    CompanyFormComponent.prototype.onSave = function () {
        var _this = this;
        console.log(this.companyOperation.value);
        console.log(Math.floor(Math.random() * 100));
        this.model.id = (this.companyId > 0) ? this.companyId : Math.floor(Math.random() * 100);
        debugger;
        this._companyService.addCompanyOperation(this.model).subscribe(function (operation) {
            _this.operations.push(operation);
        });
        this._router.navigate(['/company']);
    };
    CompanyFormComponent.prototype.addCustomFieldClick = function () {
        this.companyOperation.get('customFields').push(this.addSCustomField());
    };
    CompanyFormComponent.prototype.addSCustomField = function () {
        return this.fb.group({
            customField: ['']
        });
    };
    return CompanyFormComponent;
}());
CompanyFormComponent = __decorate([
    core_1.Component({
        selector: 'app-company-form',
        templateUrl: './company.form.component.html',
        providers: [company_service_1.CompanyService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, company_service_1.CompanyService,
        router_1.Router, forms_1.FormBuilder])
], CompanyFormComponent);
exports.CompanyFormComponent = CompanyFormComponent;
//# sourceMappingURL=company.form.component.js.map