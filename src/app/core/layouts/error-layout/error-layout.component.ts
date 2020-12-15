import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-layout',
  templateUrl: './error-layout.component.html',
  styleUrls: ['./error-layout.component.scss']
})
export class ErrorLayoutComponent implements OnInit, OnDestroy {

  public user: any;
  public path: string | string[] = this.location.path().split('/');
  public isSpinnerVisible = false;

  constructor(
    public location: Location
  ) { }

  ngOnInit() {

    this.path = this.path[this.path.length - 1];

  }

  ngOnDestroy() { }

}
