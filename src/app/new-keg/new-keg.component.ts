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
    if (name && brand && price && alcoholContent && pintsLeft) {
      let newKeg: Keg = new Keg(name, brand, price, alcoholContent, pintsLeft);
      kegList.push(newKeg);
    } else {
      alert("Fill out all the fields");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
