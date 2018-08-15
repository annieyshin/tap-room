import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg';
import { kegList } from '../models/all-kegs';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {

  kegs = kegList;

  newKegForm = null;

  selectedKeg: Keg;
  onSelect(keg: Keg): void {
    if (this.selectedKeg === keg) {
      this.selectedKeg = null;
    } else {
      this.selectedKeg = keg;
    }
  }

  priceColor(keg){
    if (keg.price <= 5) {
      return "bg-success";
    } else if (keg.price > 15) {
      return "bg-danger";
    } else if (keg.price >5) {
      return "bg-info";
    }
  }

  ABVindicator(keg) {
    if (keg.alcoholContent > 5) {
    return true;
  } else {
    return false;
  }
  }


  makeNewKeg() {
    this.newKegForm = true;
  }

  lessThanTenCheck(keg: Keg) {
    if (keg.pintsLeft < 10) {
      return true;
    } else {
      return false;
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
