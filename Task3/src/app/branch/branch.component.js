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
var branch_service_1 = require("./branch.service");
var BranchComponent = (function () {
    function BranchComponent(_branchService, _activatedRoute, _router) {
        this._branchService = _branchService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        //this.branches = this.getBranchData();
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.getBranchs();
    };
    BranchComponent.prototype.getBranchs = function () {
        var _this = this;
        this._branchService.getBranches().subscribe(function (branchData) { return _this.branches = branchData; });
    };
    BranchComponent.prototype.onBranchCreateClick = function () {
        this.branchId = 0;
        var navigationExtras = {
            queryParams: {
                "branchId": JSON.stringify(this.branchId)
            }
        };
        this._router.navigate(['/branchform'], navigationExtras);
    };
    BranchComponent.prototype.onBranchEditClick = function (_branchId) {
        this.branchId = _branchId;
        var navigationExtras = {
            queryParams: {
                "branchId": JSON.stringify(this.branchId)
            }
        };
        this._router.navigate(['/branchform'], navigationExtras);
    };
    BranchComponent.prototype.onBranchDeleteClick = function (branch) {
        if (confirm("Are you sure to delete" + branch.BranchName)) {
            this.branches = this.branches.filter(function (h) { return h !== branch; });
            this._branchService.deleteBranch(branch).subscribe();
        }
    };
    return BranchComponent;
}());
BranchComponent = __decorate([
    core_1.Component({
        selector: 'my-branch',
        templateUrl: 'app/branch/branch.component.html',
        providers: [branch_service_1.BranchService]
    }),
    __metadata("design:paramtypes", [branch_service_1.BranchService, router_1.ActivatedRoute, router_1.Router])
], BranchComponent);
exports.BranchComponent = BranchComponent;
//# sourceMappingURL=branch.component.js.map