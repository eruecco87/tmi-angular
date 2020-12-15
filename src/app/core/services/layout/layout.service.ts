import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

// RXJS
import { Subscription } from 'rxjs';

// NGX Translate
import { TranslateService } from '@ngx-translate/core';

// UI Kit
declare const UIkit: any;

// Environment
import { environment } from '@env/environment';

// Models
import { RouteConfiguration } from '@core/services/layout/models';

@Injectable({
  providedIn: 'root'
})
export class LayoutService implements OnDestroy {

  public primaryColor = environment.primaryColor;
  public routeConfiguration: RouteConfiguration = new RouteConfiguration();

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private translateService: TranslateService
  ) {

    this.subscriptions.add(
      this.router.events.subscribe(() => {

        this.routeConfiguration = new RouteConfiguration(this.getRouteData(this.route.snapshot));
        this.setPageData();

      })
    );

    this.subscriptions.add(
      this.translateService.onLangChange.subscribe(() => {

        this.reloadUIkitComponents();
        this.setPageData();

      })
    );

    this.initLayout();

  }

  public setPageData() {

    if (this.routeConfiguration && this.routeConfiguration.pageData) {

      this.title.setTitle(`${ environment.pageTitlePrefix } | ${ this.translateService.instant(this.routeConfiguration.pageData.title) }`);

    } else {

      this.title.setTitle(`${ environment.pageTitlePrefix } `);

    }

  }

  public setLanguage(lang: string) {

    localStorage.setItem(`${ environment.localStorageKeyPrefix }language`, lang);

  }

  public getLanguage() {

    return localStorage.getItem(`${ environment.localStorageKeyPrefix }language`);

  }

  public getRouteData(snapshot: ActivatedRouteSnapshot): any {

    const ROUTE_DATA = snapshot.firstChild ? Object.assign({}, snapshot.data, snapshot.firstChild.data) : snapshot.data;
    const CHILD_DATA = snapshot.firstChild ? this.getRouteData(snapshot.firstChild) : {};
    return Object.assign(ROUTE_DATA, CHILD_DATA);

  }

  private initLayout(): void {

    const LANGUAGE = this.getLanguage();
    LANGUAGE ? this.translateService.use(LANGUAGE) : this.translateService.use('english');

  }

  private reloadUIkitComponents() {

    const tooltips = UIkit.util.findAll('*[uk-tooltip]');

    tooltips.forEach(tooltip => {

      UIkit.tooltip(tooltip).$destroy();

      setTimeout(() => {
        UIkit.tooltip(tooltip);
      }, 500);

    });

  }

  ngOnDestroy() {

    this.subscriptions.unsubscribe();

  }
}
