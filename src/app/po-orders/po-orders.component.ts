import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-po-orders',
  templateUrl: './po-orders.component.html',
  styleUrls: ['./po-orders.component.css']
})
export class PoOrdersComponent implements OnInit {

  openPDesc: boolean = true;
  openPU: boolean = true;
  openPG: boolean = true;
  openA: boolean = true;
  constructor(private app: AppService) { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.app.attributes);
  }



}
