import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

// RXJS
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// UIkit
declare const UIkit: any;

// Environment
import { environment } from '@env/environment';

// Enums
import { MiniStatus } from '@core/services/mini/enums';
import { TagCategory, TagStatus } from '@core/services/tag/enums';

// Models
import { Mini } from '@core/services/mini/models';

// Services
import { MiniService } from '@core/services/mini/mini.service';
import { TagService } from '@core/services/tag/tag.service';

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrls: ['./mini-detail.component.scss']
})
export class MiniDetailComponent implements OnInit, OnDestroy {

  public mini: Mini;
  public status = MiniStatus;
  public tagCategory = TagCategory;
  public tagStatus = TagStatus;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    public miniService: MiniService,
    public tagService: TagService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.activatedRoute.params.pipe(
        switchMap((params: Params) => this.miniService.getById(params.id))
      ).subscribe((mini: Mini) => {

        this.mini = mini;
        this.title.setTitle(`${ environment.pageTitlePrefix } | ${ mini.name }`);

      }, (error) => {

        if (error.status === 404) {

          this.router.navigate(['/error/404']);

        }

      })
    );

    this.subscriptions.add(
      this.miniService.miniSelected$.subscribe(() => {

        this.mini = undefined;
        document.getElementById('content').scrollTo(0, 0)

      })
    );

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
