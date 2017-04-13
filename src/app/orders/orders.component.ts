import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'truc-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
