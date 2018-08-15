import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg';
import { kegList } from '../models/all-kegs';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {

  addNewKeg(name, brand, price, alcoholContent, pintsLeft) {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent, pintsLeft);
    console.log(name);
    console.log(brand);
    kegList.push(newKeg);
  }
  constructor() { }

  ngOnInit() {
  }

}
