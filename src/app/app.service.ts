import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  attributes: PO_FORM = {edate: ""};

  constructor() { }

}


interface PO_FORM {
  edate?: any;
  pname?: string;
  department?: string;
  deliverTo?: string;
  quantity?: number;
  estimate_cost?: number;
  items_needed?: string;
  purpose?: string;
  fundsCode?: Array<FUNDS>;
  vquotes?: boolean;
  other?: boolean;
  otherE?: string;
  vendorF?: string;
  vendorS?: string;
  

}

interface FUNDS {
  code: string;
  price: string;
}
