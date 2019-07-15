import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {
  totalPhone = 0;
  constructor() { }

  ngOnInit() {
  }

  PhoneMonth(e) {
    this.totalPhone = Math.floor(Math.random() * 52 + 19)
  }
}
