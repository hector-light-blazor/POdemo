import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  att: PO_FORM;

  constructor() { }

}


interface PO_FORM {
  edate?: any;
  pname?: string;
  department?: string;
  deliverTo?: string;
  quantity?: number;
  estimate_cost?: number;
  

}
