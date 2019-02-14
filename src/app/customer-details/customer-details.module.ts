import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { CustomerDetailsComponent } from './customer-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CustomerDetailsComponent],
  imports: [
  CommonModule,
    CustomerDetailsRoutingModule,
    FormsModule
  ]
})
export class CustomerDetailsModule { }
