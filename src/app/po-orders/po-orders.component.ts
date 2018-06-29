import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-po-orders',
  templateUrl: './po-orders.component.html',
  styleUrls: ['./po-orders.component.css']
})
export class PoOrdersComponent implements OnInit {

  openPDesc: boolean = true;
  openPU: boolean = true;
  openPG: boolean = true;
  constructor() { }

  ngOnInit() {
  }



}
