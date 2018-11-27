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
var http_1 = require("@angular/common/http");
var company_service_1 = require("../company/company.service");
//import { Http, Response } from '@angular/http';
require("rxjs/add/operator/map");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var BranchService = (function () {
    function BranchService(http, _companyService) {
        this.http = http;
        this._companyService = _companyService;
        this.BranchsUrl = 'api/branches';
        this.companyUrl = 'api/companies';
    }
    /** GET branches from the server */
    BranchService.prototype.getBranches = function () {
        return this.http.get(this.BranchsUrl);
    };
    BranchService.prototype.getBranch = function (id) {
        var url = this.BranchsUrl + "/" + id;
        return this.http.get(url);
    };
    //////// Save methods //////////
    /** POST: add a new branch to the server */
    BranchService.prototype.addBranch = function (branch) {
        return this.http.post(this.BranchsUrl, branch, httpOptions);
    };
    /** DELETE: delete the branch from the server */
    BranchService.prototype.deleteBranch = function (branch) {
        var id = typeof branch === 'number' ? branch : branch.id;
        var url = this.BranchsUrl + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: update the branch on the server */
    BranchService.prototype.updateBranch = function (branch) {
        return this.http.put(this.BranchsUrl, branch, httpOptions);
    };
    /* GET branches whose name contains search term */
    BranchService.prototype.searchBranch = function (branchId) {
        return this.http.get(this.BranchsUrl + "/?id=" + branchId);
    };
    BranchService.prototype.getCompanies = function () {
        return this.http.get(this.companyUrl);
    };
    return BranchService;
}());
BranchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, company_service_1.CompanyService])
], BranchService);
exports.BranchService = BranchService;
//# sourceMappingURL=branch.service.js.map