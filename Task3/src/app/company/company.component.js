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
var CompanyComponent = (function () {
    function CompanyComponent(_companyService, _activatedRoute, _router) {
        this._companyService = _companyService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.tableHeads = [];
        this.tableValues = [];
        this.getOperations();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getOperations();
    };
    CompanyComponent.prototype.getOperations = function () {
        var _this = this;
        this._companyService.getJSON().subscribe(function (operationData) {
            _this.operations = operationData;
            _this.findColumnValues();
            console.log(_this.operations);
        });
        //debugger;
    };
    CompanyComponent.prototype.onCreateClick = function () {
        this.companyid = 0;
        var navigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    };
    CompanyComponent.prototype.onEditClick = function (id) {
        this.companyid = id;
        var navigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    };
    CompanyComponent.prototype.onDeleteClick = function (company) {
        if (confirm("Are you sure to delete" + company.CompanyName)) {
        }
    };
    CompanyComponent.prototype.findColumnValues = function () {
        var _this = this;
        this.operations.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (_this.tableHeads.indexOf(key) == -1) {
                    _this.tableHeads.push(key);
                }
                _this.tableValues.push(obj[key]);
            });
        });
    };
    CompanyComponent.prototype.generateValue = function (obj) {
        return Object.keys(obj).map(function (key) {
            //if (key !== "id") {
            return obj[key];
            //}
        });
    };
    CompanyComponent.prototype.getAdditionalHtml = function (obj) {
        if (Object.keys(obj).length !== this.tableHeads.length) {
            var tab = document.createElement("td");
            return tab;
        }
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'my-company',
        templateUrl: 'app/company/company.component.html',
        providers: [company_service_1.CompanyService]
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute, router_1.Router])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map