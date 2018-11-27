import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'
import { CompanyService } from './company/company.service';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompanyFormComponent } from './company/company.form.component';
import { BranchComponent } from './branch/branch.component';
import { BranchFormComponent } from './branch/branch.form.component';
import { PageNotFoundComponent } from './Others/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'company', component: CompanyComponent },
    { path: 'companyform', component: CompanyFormComponent, data: { companyId: '' } },
    { path: 'branch', component: BranchComponent },
    { path: 'branchform', component: BranchFormComponent, data: { companyId: '' } },
    { path: '', redirectTo: '/company', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false })
    ],
    declarations: [AppComponent, CompanyComponent, CompanyFormComponent, BranchComponent, BranchFormComponent, PageNotFoundComponent],
    providers: [CompanyService],
    bootstrap: [AppComponent]
})
export class AppModule { }
