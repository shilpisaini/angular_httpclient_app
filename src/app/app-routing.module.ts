import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

 
const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent ,
     children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' },
      { path: 'add', loadChildren: './add-customer/add-customer.module#AddCustomerModule'},
     ]
   },
   { 
     path: 'customers/:id', 
     loadChildren: './customer-details/customer-details.module#CustomerDetailsModule'
   },
   { 
     path: '', 
     redirectTo: 'customers', 
     pathMatch: 'full'
   }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
 
export class AppRoutingModule {}