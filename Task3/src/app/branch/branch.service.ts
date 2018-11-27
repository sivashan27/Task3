import { Injectable,Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Branch } from './branch';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company'
//import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BranchService {
    private BranchsUrl = 'api/branches';
    companyUrl: string = 'api/companies';
    private companies: Company[];
    constructor(private http: HttpClient, private _companyService: CompanyService) { }

    /** GET branches from the server */
    getBranches(): Observable<Branch[]> {
        return this.http.get<Branch[]>(this.BranchsUrl)
    }

    getBranch(id: number): Observable<Branch> {
        const url = `${this.BranchsUrl}/${id}`;
        return this.http.get<Branch>(url)
    }

    //////// Save methods //////////

    /** POST: add a new branch to the server */
    addBranch(branch: Branch): Observable<Branch> {
        return this.http.post<Branch>(this.BranchsUrl, branch, httpOptions);
    }

    /** DELETE: delete the branch from the server */
    deleteBranch(branch: Branch | number): Observable<Branch> {
        const id = typeof branch === 'number' ? branch : branch.id;
        const url = `${this.BranchsUrl}/${id}`;

        return this.http.delete<Branch>(url, httpOptions);
    }

    /** PUT: update the branch on the server */
    updateBranch(branch: Branch): Observable<any> {
        return this.http.put(this.BranchsUrl, branch, httpOptions);
    }
    /* GET branches whose name contains search term */
    searchBranch(branchId: number): Observable<Branch[]> {
        return this.http.get<Branch[]>(`${this.BranchsUrl}/?id=${branchId}`);
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.companyUrl)
    }
}