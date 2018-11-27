"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var http_2 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var company_service_1 = require("./company/company.service");
var app_component_1 = require("./app.component");
var company_component_1 = require("./company/company.component");
var company_form_component_1 = require("./company/company.form.component");
var branch_component_1 = require("./branch/branch.component");
var branch_form_component_1 = require("./branch/branch.form.component");
var pagenotfound_component_1 = require("./Others/pagenotfound.component");
var appRoutes = [
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'companyform', component: company_form_component_1.CompanyFormComponent, data: { companyId: '' } },
    { path: 'branch', component: branch_component_1.BranchComponent },
    { path: 'branchform', component: branch_form_component_1.BranchFormComponent, data: { companyId: '' } },
    { path: '', redirectTo: '/company', pathMatch: 'full' },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), http_2.HttpClientModule, angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false })
        ],
        declarations: [app_component_1.AppComponent, company_component_1.CompanyComponent, company_form_component_1.CompanyFormComponent, branch_component_1.BranchComponent, branch_form_component_1.BranchFormComponent, pagenotfound_component_1.PageNotFoundComponent],
        providers: [company_service_1.CompanyService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map