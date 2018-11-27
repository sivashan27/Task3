import { Component, OnInit } from '@angular/core';
import { Branch } from './branch';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { BranchService } from './branch.service';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company'
import { forEach } from '@angular/router/src/utils/collection';
import { debug } from 'util';

@Component({
    selector: 'app-branch-form',
    templateUrl: './branch.form.component.html',
    providers: [CompanyService, BranchService]
})
export class BranchFormComponent implements OnInit {
    ngOnInit(): void {
        this.pageHeader = "New Branch";
        
        this._activatedRoute.queryParams.subscribe(params => {
            this.branchId = JSON.parse(params["branchId"]);
        });
        if (this.branchId != 0) {
            this.getBranch();
        }
        this.getCompanies();
    }
    pageHeader: string;
    branchId: number;
    model = new Branch();
    branches: Branch[];
    companies: Company[];
    constructor(private _activatedRoute: ActivatedRoute, private _branchService: BranchService, private _companyService: CompanyService,
        private _router: Router//,_company: Branch,
    ) {
    }
    onSave(): void {
        this._branchService.addBranch(this.model).subscribe(company => {
            this.branches.push(company);
        });
        this._router.navigate(['/branch']);
    }
    onCancel(): void {
        this._router.navigate(['/branch'])
    }

    getBranch(): void {
        this.pageHeader = "Edit Branch";
        this._branchService.getBranch(this.branchId)
            .subscribe(hero => this.model = hero);
    }
    getCompanies(): void {
        this._branchService.getCompanies().subscribe((companyData) => this.companies = companyData);
    }
}