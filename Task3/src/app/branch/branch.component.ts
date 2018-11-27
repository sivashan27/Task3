import { Component, OnInit } from '@angular/core';
import { Branch } from './branch';
import { ActivatedRoute, Router, Route, NavigationExtras } from '@angular/router';
import { BranchService } from './branch.service'


@Component({
    selector: 'my-branch',
    templateUrl: 'app/branch/branch.component.html',
    providers: [BranchService]
})
export class BranchComponent implements OnInit  {

    ngOnInit(): void {
        this.getBranchs();
    }
    branches: Branch[];
    branchId: number;
    constructor(private _branchService: BranchService, private _activatedRoute: ActivatedRoute, private _router: Router) {
        //this.branches = this.getBranchData();
    }

    getBranchs(): void {
        this._branchService.getBranches().subscribe((branchData) => this.branches = branchData);
    }
    onBranchCreateClick(): void {
        this.branchId = 0;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "branchId": JSON.stringify(this.branchId)
            }
        };
        this._router.navigate(['/branchform'], navigationExtras);
    }
    onBranchEditClick(_branchId: number): void {
        this.branchId = _branchId;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "branchId": JSON.stringify(this.branchId)
            }
        };
        this._router.navigate(['/branchform'], navigationExtras);
    }

    onBranchDeleteClick(branch: Branch): void {
        if (confirm("Are you sure to delete" + branch.BranchName)) {
            this.branches = this.branches.filter(h => h !== branch);
            this._branchService.deleteBranch(branch).subscribe();
        }
    }
}