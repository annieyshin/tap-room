import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg';

@Component({
  selector: 'app-keg-detail',
  templateUrl: './keg-detail.component.html',
  styleUrls: ['./keg-detail.component.css']
})
export class KegDetailComponent implements OnInit {
  @Input() keg: Keg;

  decrementPint() {
    this.keg.pintsLeft--;
  }

  constructor() { }

  ngOnInit() {
  }

}
