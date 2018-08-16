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

  filterBySale: string = "allKegs";

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
      return "bg-success theKegName";
    } else if (keg.price > 15) {
      return "bg-danger theKegName";
    } else if (keg.price >5) {
      return "bg-info theKegName";
    }
  }

  progressBarColor(keg) {
    if (Math.trunc((keg.pintsLeft/124)*100) < 25) {
      return "progress-bar progress-bar-striped bg-danger";
    } else if (Math.trunc((keg.pintsLeft/124)*100) < 50) {
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

  onChange(optionFromMenu) {
    this.filterBySale = optionFromMenu;
  }

  toggleOnSale(clickedKeg: Keg, setSale: boolean) {
    clickedKeg.onSale = setSale;
    this.salePrice(clickedKeg, setSale);
  }

  salePrice(clickedKeg:Keg, setSale: boolean ) {
    if (clickedKeg.onSale === true) {
      clickedKeg.price --;
    } else {
      clickedKeg.price ++;
    }
    clickedKeg.onSale=setSale;
  }






  constructor() { }

  ngOnInit() {
  }

}
