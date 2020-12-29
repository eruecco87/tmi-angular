import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

// RXJS
import { Observable, Subscription, fromEvent } from 'rxjs';

// NGX Translate
import { TranslateService } from '@ngx-translate/core';

// Environment
import { environment } from '@env/environment';

// Services
import { LayoutService } from '@core/services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;
  public backOnline = false;
  public showRouteLoader = false;

  private online$: Observable<Event>;
  private offline$: Observable<Event>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private layoutService: LayoutService // DO NOT DELETE: layoutService instance is needed to get the route data on application load.
  ) {

    this.translateService.addLangs(['english', 'español']);
    this.translateService.setDefaultLang('english');

    this.subscriptions.add(
      this.router.events.subscribe((event: RouterEvent) => {

        if (event instanceof NavigationStart) {

          this.showRouteLoader = true;

        }

        if (event instanceof NavigationEnd || event instanceof NavigationCancel) {

          this.showRouteLoader = false;

        }

      })
    );

    this.checkConnectivity();

  }

  private checkConnectivity() {

    this.online$ = fromEvent(window, 'online');
    this.offline$ = fromEvent(window, 'offline');

    this.subscriptions.add(

      this.online$.subscribe(() => {

        this.isOnline = true;
        this.backOnline = true;

        setTimeout(() => {

          this.backOnline = false;

        }, environment.notificationTimeout);

      })

    );

    this.subscriptions.add(

      this.offline$.subscribe(() => {

        this.isOnline = false;

      })

    );

  }
}
