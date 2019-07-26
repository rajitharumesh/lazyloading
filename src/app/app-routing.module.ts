import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'do',
    // loadChildren: '././delivery-order/delivery-order.module#DeliveryOrderModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren : () => import('./delivery-order/delivery-order.module').then(m => m.DeliveryOrderModule), // new dynamic import method
  },
  {
    path: 'po',
    // loadChildren: '././delivery-order/delivery-order.module#DeliveryOrderModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren : () => import('./purchase-order/purchase-order-route.module').then(m => m.PurchaseOrderRouteModule), // new dynamic import method
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
