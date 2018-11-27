"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var companies = [
            { id: 1001, CompanyName: 'New Company', Address1: 'Chennai', Address2: 'Chennai2', City: 'TamilNadu', ContactName: 'Sivashanmugam', ContactEmail: 'siva_shan27@outlook.com', ContactPhone: '98763459', PostalCode: '23456' },
            { id: 1002, CompanyName: 'New Company1', Address1: 'Chennai', Address2: 'Chennai2', City: 'TamilNadu', ContactName: 'Sivashanmugam', ContactEmail: 'siva_shan27@outlook.com', ContactPhone: '98763459', PostalCode: '23456' },
            { id: 1003, CompanyName: 'New Company2', Address1: 'Chennai', Address2: 'Chennai2', City: 'TamilNadu', ContactName: 'Sivashanmugam', ContactEmail: 'siva_shan27@outlook.com', ContactPhone: '98763459', PostalCode: '23456' },
            { id: 1004, CompanyName: 'New Company3', Address1: 'Chennai', Address2: 'Chennai2', City: 'TamilNadu', ContactName: 'Sivashanmugam', ContactEmail: 'siva_shan27@outlook.com', ContactPhone: '98763459', PostalCode: '23456' }
        ];
        var branches = [
            { CompanyId: 'New Company', id: 2001, Address1: 'Chennai', Address2: 'Chennai2', BranchName: 'TamilNadu', ContactName: 'Sivashanmugam' },
            { CompanyId: 'New Company1', id: 2002, Address1: 'Chennai', Address2: 'Chennai2', BranchName: 'Kerala', ContactName: 'Sivashanmugam' },
            { CompanyId: 'New Company2', id: 2003, Address1: 'Chennai', Address2: 'Chennai2', BranchName: 'Karnataka', ContactName: 'Sivashanmugam' },
            { CompanyId: 'New Company', id: 2004, Address1: 'Chennai', Address2: 'Chennai2', BranchName: 'Telungana', ContactName: 'Sivashanmugam' }
        ];
        return { companies: companies, branches: branches };
    };
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    InMemoryDataService.prototype.genId = function (companies) {
        return companies.length > 0 ? Math.max.apply(Math, companies.map(function (compny) { return compny.id; })) + 1 : 11;
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map