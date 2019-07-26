
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order.component';

@NgModule({
  declarations: [PurchaseOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PurchaseOrderComponent }
    ])
  ]
})
export class PurchaseOrderRouteModule { }
