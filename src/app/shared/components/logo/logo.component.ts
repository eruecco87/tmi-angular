import { Component, Input, OnInit } from '@angular/core';

// Environment
import { environment } from "@env/environment";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() fill = environment.primaryColor;
  @Input() width = 100;
  @Input() diceOnly = false;

  constructor() { }

  ngOnInit(): void { }
}
