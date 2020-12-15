import { Component, Input, OnInit, OnDestroy } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// NGX Translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit, OnDestroy {

  @Input() icon = 'ban';
  @Input() iconSize = 'lg';
  @Input() text: string;
  @Input() textSize: number;
  @Input() spin = false;
  @Input() border = true;
  @Input() white = false;

  private subscriptions: Subscription;

  constructor(
    private translateService: TranslateService
  ) {

    this.subscriptions = new Subscription();

  }

  ngOnInit() {

    if (!this.text) {

      this.text = this.translateService.instant('emptyState.empty');

      this.subscriptions.add(
        this.translateService.onLangChange.subscribe(() => {

          this.text = this.translateService.instant('emptyState.empty');

        })
      );

    }

  }

  ngOnDestroy() {

    this.subscriptions.unsubscribe();

  }
}
