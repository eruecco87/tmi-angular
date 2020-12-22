import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

// RXJS
import { Subscription } from 'rxjs';
import {switchMap, take} from 'rxjs/operators';

// Environment
import { environment } from '@env/environment';

// Models
import { Creator } from '@core/services/creator/models';
import { Mini } from '@core/services/mini/models';

// Services
import { LayoutService } from '@core/services/layout/layout.service';
import { CreatorService } from '@core/services/creator/creator.service';
import { MiniService } from '@core/services/mini/mini.service';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.scss']
})
export class CreatorDetailComponent implements OnInit, OnDestroy {

  public creator: Creator;
  public fetching = true;
  public currentPage;
  public minis: Mini[];
  public lastPage = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    public layoutService: LayoutService,
    public creatorService: CreatorService,
    public miniService: MiniService
  ) { }

  ngOnInit(): void {

    this.currentPage = 1;

    this.subscriptions.add(
      this.activatedRoute.params.pipe(
        switchMap((params: Params) => this.creatorService.getById(params.id))
      ).subscribe((creator: Creator) => {

        this.creator = creator;
        this.title.setTitle(`${ environment.pageTitlePrefix } | ${ creator.name }`);
        this.getMinis(this.creator.id);

      }, (error) => {

        if (error.status === 404) {

          this.router.navigate(['/error/404']);

        }

      })
    );

    this.subscriptions.add(
      this.layoutService.contentScrolled$.subscribe((event: Event) => {

        if (event.target['offsetHeight'] + event.target['scrollTop'] >= event.target['scrollHeight']) {

          if (!this.fetching && !this.lastPage) {

            this.getMinis(this.creator.id);

          }

        }

      })
    );

  }

  public getMinis(id: number) {

    this.fetching = true;

    if (this.currentPage === 1) {

      this.minis = null;

    }

    this.miniService.get(this.currentPage, null, id).pipe(
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

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
