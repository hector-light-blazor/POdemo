import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-pdescription',
  templateUrl: './pdescription.component.html',
  styleUrls: ['./pdescription.component.css']
})
export class PdescriptionComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit() {
  }

}
