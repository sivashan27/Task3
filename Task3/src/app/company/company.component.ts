import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { ActivatedRoute, Router, Route, NavigationExtras } from '@angular/router';
import { CompanyService } from './company.service';
import { Operation } from '../company/operation'
import { debug } from 'util';

@Component({
    selector: 'my-company',
    templateUrl: 'app/company/company.component.html',
    providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

    ngOnInit() {
        this.getOperations();
    }
    companyid: number;
    //operations: Operation[];
    operations: any[];
    tableHeads: any[] = [];
    tableValues: any[] = [];
    constructor(private _companyService: CompanyService, private _activatedRoute: ActivatedRoute, private _router: Router) {
        this.getOperations();
    }
    getOperations(): void {
        this._companyService.getJSON().subscribe((operationData) => {
            this.operations = operationData;
            this.findColumnValues();
            console.log(this.operations);
        });
        //debugger;
    }

    onCreateClick(): void {
        this.companyid = 0;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    }
    onEditClick(id: number): void {
        this.companyid = id;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    }

    onDeleteClick(company: Company): void {
        if (confirm("Are you sure to delete" + company.CompanyName)) {
            //this.companies = this.companies.filter(h => h !== company);
            //this._companyService.deleteCompany(company).subscribe();
        }
    }
    findColumnValues(): void {
        this.operations.forEach(obj => {
            Object.keys(obj).forEach(key => {
                if (this.tableHeads.indexOf(key) == -1) {
                    this.tableHeads.push(key);
                }
                this.tableValues.push(obj[key]);
            });
        });
    }
    generateValue(obj: any) {
        return Object.keys(obj).map((key) => {
            //if (key !== "id") {
            return obj[key]
            //}
        });
    }
    getAdditionalHtml(obj: any) {
        if (Object.keys(obj).length !== this.tableHeads.length) {
            var tab = document.createElement("td");
            return tab;
        }
    }
}