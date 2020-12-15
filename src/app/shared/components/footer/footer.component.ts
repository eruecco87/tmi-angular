import { Component, OnInit } from '@angular/core';

// Moment JS
declare const moment: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public today: Date;

  constructor() {

    this.today = moment().format('YYYY');

  }

  ngOnInit(): void {}
}
