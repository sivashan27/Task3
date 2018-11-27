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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:64210/api/Companies"; // Web API URL 
    }
    CompanyService.prototype.getJSON = function () {
        //return this.http.get("./assets/companyOperation.json").map((res: Response) => res.json());
        return this.http.get(this.apiUrl).map(function (res) { return res.json().Companyoperations; });
    };
    //getJSON() {
    //    this.operations = this.http.get("assets/companyOperation.json");
    //    debugger;
    //    console.log(this.operations);
    //    //.map((res: any) => res.json());
    //}
    CompanyService.prototype.getOperations = function () {
        //this.getJSON().subscribe(data => this.operations = data, error => console.log(error));
        //debugger;
        return this.operations;
    };
    CompanyService.prototype.getCompanyOperation = function (id) {
        //return this.http.get("./assets/companyOperation.json").map((res: Response) => res.json());
        var url = this.apiUrl + "/" + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CompanyService.prototype.addCompanyOperation = function (companyOparation) {
        //return this.http.post(this.apiUrl, branch, httpOptions.headers);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(this.apiUrl, companyOparation, { headers: headers }).map(function (res) { return res.json(); });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map