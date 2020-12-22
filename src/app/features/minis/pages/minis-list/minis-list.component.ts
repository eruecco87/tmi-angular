import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// RXJS
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

// Models
import { Mini } from '@core/services/mini/models';

// Services
import { LayoutService } from '@core/services/layout/layout.service';
import { MiniService } from '@core/services/mini/mini.service';

@Component({
  selector: 'app-minis-list',
  templateUrl: './minis-list.component.html',
  styleUrls: ['./minis-list.component.scss']
})
export class MinisListComponent implements OnInit, OnDestroy {

  public searchString: string;
  public fetching = true;
  public currentPage;
  public minis: Mini[];
  public lastPage = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutService: LayoutService,
    private miniService: MiniService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.activatedRoute.queryParams.subscribe((params: Params) => {

        this.currentPage = 1;
        this.searchString = params.searchString;
        this.getData();

      })
    );

    this.subscriptions.add(
      this.layoutService.contentScrolled$.subscribe((event: Event) => {

        if (event.target['offsetHeight'] + event.target['scrollTop'] >= event.target['scrollHeight']) {

          if (!this.fetching && !this.lastPage) {

            this.getData();

          }

        }

      })
    );

  }

  public getData() {

    this.fetching = true;

    if (this.currentPage === 1) {

      this.minis = null;

    }

    this.miniService.get(this.currentPage, this.searchString).pipe(
      take(1)
    ).subscribe((response: Mini[]) => {

      this.fetching = false;

      if (response) {

        this.minis = [...this.minis ?  this.minis : [], ...response];
        this.currentPage ++;

      } else {

        this.lastPage = true;

      }

    });

  }

  public clearSearch() {

    this.router.navigate(['/minis']);

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
