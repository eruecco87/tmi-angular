import { Component, OnInit } from '@angular/core';

// Services
import { LayoutService } from '@core/services/layout/layout.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit() {}
}
