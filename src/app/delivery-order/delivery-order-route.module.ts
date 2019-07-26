import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeliveryOrderComponent } from './delivery-order.component';

@NgModule({
  declarations: [DeliveryOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DeliveryOrderComponent }
    ])
  ]
})
export class DeliveryOrderRouteModule { }
