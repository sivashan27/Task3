import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { CompanyService } from './company.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { parse } from 'url';
import { Operation } from '../company/operation'

@Component({
    selector: 'app-company-form',
    templateUrl: './company.form.component.html',
    providers: [CompanyService]
})
export class CompanyFormComponent implements OnInit {
    pageHeader: string;
    companyId: number;
    model = new Operation();
    //model : any;
    operations: Operation[];
    //operations: any[];
    companyOperation: FormGroup;
    ngOnInit(): void {
        this._activatedRoute.queryParams.subscribe(params => {
            this.companyId = JSON.parse(params["companyid"]);
        });
        if (this.companyId != 0) {
            this.getCompanyOperation();
        }
        this.companyOperation = this.fb.group({
            companyname: ['', [Validators.required, Validators.minLength(2)]],
            operatingcountry: [''],
            business: [''],
            customFields: this.fb.array([
                //this.addSCustomField()
            ])
        });
    }
    getCompanyOperation(): void {
        this.pageHeader = "Edit Branch";
        this._companyService.getCompanyOperation(this.companyId).subscribe(operation => this.model = operation);
    }
    constructor(private _activatedRoute: ActivatedRoute, private _companyService: CompanyService,
        private _router: Router, private fb: FormBuilder) {
        this.pageHeader = "Company Operation";
        //this.model = _company;
    }
    onSave(): void {
        console.log(this.companyOperation.value);
        console.log(Math.floor(Math.random() * 100));
        this.model.id = (this.companyId > 0) ? this.companyId : Math.floor(Math.random() * 100);
        debugger;
        this._companyService.addCompanyOperation(this.model).subscribe(operation =>
        {
            this.operations.push(operation)
        });
        this._router.navigate(['/company']);
    }
    addCustomFieldClick(): void {
        (<FormArray>this.companyOperation.get('customFields')).push(this.addSCustomField());
    }
    addSCustomField(): FormGroup {
        return this.fb.group({
            customField: ['']
        });
    }
}

