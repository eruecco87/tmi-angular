import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// RXJS
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

// Models
import { Creator } from '@core/services/creator/models';

// Services
import { LayoutService } from '@core/services/layout/layout.service';
import { CreatorService } from "@core/services/creator/creator.service";

@Component({
  selector: 'app-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.scss']
})
export class CreatorsListComponent implements OnInit, OnDestroy {

  public searchString: string;
  public fetching = true;
  public currentPage;
  public creators: Creator[];
  public lastPage = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutService: LayoutService,
    private creatorService: CreatorService
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

      this.creators = null;

    }

    this.creatorService.get(this.currentPage, this.searchString).pipe(
      take(1)
    ).subscribe((response: Creator[]) => {

      this.fetching = false;

      if (response) {

        this.creators = [...this.creators ?  this.creators : [], ...response];
        this.currentPage ++;

      } else {

        this.lastPage = true;

      }

    });

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
