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
  range: number[] = [];

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

  progressBarColor(keg) {
    if (keg.pintsLeft <= 25) {
      return "progress-bar progress-bar-striped bg-danger";
    } else if (keg.pintsLeft <=50) {
      return "progress-bar progress-bar-striped bg-warning";
    } else {
      return "progress-bar progress-bar-striped bg-primary"
    }
  }



  ABVindicator(keg) {
    if (keg.alcoholContent > 5) {
    return true;
    } else {
    return false;
    }
  }

  getPic() {
    return "assets/beer.jpg" ;
  }

  getAbv(keg) {
    this.range = [];
    let abvNumber = Math.ceil(keg.alcoholContent/5);
    for (let x = 0; x < abvNumber; x++) {
      this.range.push(x);
    }
    return this.range;
  }

  kegPercentage(keg) {
    let percentage = Math.trunc((keg.pintsLeft/124)*100);
    return percentage;
  }

  makeNewKeg() {
    this.newKegForm = true;
  }

  closeNewKegForm() {
    this.newKegForm = null;
  }

  closeKegDetail() {
    this.selectedKeg = null;
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
