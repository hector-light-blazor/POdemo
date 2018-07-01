import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {

  @Input() title:string = "";
  constructor() { }

  ngOnInit() {
  }

}
