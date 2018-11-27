import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';
import { Operation } from '../company/operation';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CompanyService {
    apiUrl: string = "http://localhost:64210/api/Companies";// Web API URL 
    operations: Operation[];
    items: any;
    constructor(private http: Http) {
    }
    getJSON(): Observable<Operation[]> {
        //return this.http.get("./assets/companyOperation.json").map((res: Response) => res.json());
        return this.http.get(this.apiUrl).map((res: Response) => res.json().Companyoperations);
    }
    //getJSON() {
    //    this.operations = this.http.get("assets/companyOperation.json");
    //    debugger;
    //    console.log(this.operations);
    //    //.map((res: any) => res.json());
    //}
    getOperations(): Array<any> {
        //this.getJSON().subscribe(data => this.operations = data, error => console.log(error));
        //debugger;
        return this.operations;
    }
    getCompanyOperation(id: number): Observable<Operation> {
        //return this.http.get("./assets/companyOperation.json").map((res: Response) => res.json());
        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url).map((res: Response) => res.json());
    }
    addCompanyOperation(companyOparation: Operation): Observable<Operation> {
        //return this.http.post(this.apiUrl, branch, httpOptions.headers);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(this.apiUrl, companyOparation, { headers: headers }).map((res: Response) => res.json());
    }
}
