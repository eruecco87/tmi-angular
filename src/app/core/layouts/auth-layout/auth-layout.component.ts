import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { LayoutService } from '@core/services/layout/layout.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit() {}

  ngOnDestroy() {}
}
