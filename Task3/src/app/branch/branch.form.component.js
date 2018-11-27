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
var branch_1 = require("./branch");
var router_1 = require("@angular/router");
var branch_service_1 = require("./branch.service");
var company_service_1 = require("../company/company.service");
var BranchFormComponent = (function () {
    function BranchFormComponent(_activatedRoute, _branchService, _companyService, _router //,_company: Branch,
    ) {
        this._activatedRoute = _activatedRoute;
        this._branchService = _branchService;
        this._companyService = _companyService;
        this._router = _router; //,_company: Branch,
        this.model = new branch_1.Branch();
    }
    BranchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageHeader = "New Branch";
        this._activatedRoute.queryParams.subscribe(function (params) {
            _this.branchId = JSON.parse(params["branchId"]);
        });
        if (this.branchId != 0) {
            this.getBranch();
        }
        this.getCompanies();
    };
    BranchFormComponent.prototype.onSave = function () {
        var _this = this;
        this._branchService.addBranch(this.model).subscribe(function (company) {
            _this.branches.push(company);
        });
        this._router.navigate(['/branch']);
    };
    BranchFormComponent.prototype.onCancel = function () {
        this._router.navigate(['/branch']);
    };
    BranchFormComponent.prototype.getBranch = function () {
        var _this = this;
        this.pageHeader = "Edit Branch";
        this._branchService.getBranch(this.branchId)
            .subscribe(function (hero) { return _this.model = hero; });
    };
    BranchFormComponent.prototype.getCompanies = function () {
        var _this = this;
        this._branchService.getCompanies().subscribe(function (companyData) { return _this.companies = companyData; });
    };
    return BranchFormComponent;
}());
BranchFormComponent = __decorate([
    core_1.Component({
        selector: 'app-branch-form',
        templateUrl: './branch.form.component.html',
        providers: [company_service_1.CompanyService, branch_service_1.BranchService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, branch_service_1.BranchService, company_service_1.CompanyService,
        router_1.Router //,_company: Branch,
    ])
], BranchFormComponent);
exports.BranchFormComponent = BranchFormComponent;
//# sourceMappingURL=branch.form.component.js.map