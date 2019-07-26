import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        alert('navigation succeeded');
      }
      // if (event instanceof NavigationEnd) {
      //   alert('navigation completed');
      // }
    })
  }

  ngOnDestroy() {
    this.router.dispose();
  }
  aa() {

  }
}
