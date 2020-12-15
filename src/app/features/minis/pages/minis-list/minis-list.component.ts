import {Component, OnInit, OnDestroy } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// Models
import { Mini } from '@core/services/mini/models';

// Services
import { MiniService } from '@core/services/mini/mini.service';

@Component({
  selector: 'app-home',
  templateUrl: './minis-list.component.html',
  styleUrls: ['./minis-list.component.scss']
})
export class MinisListComponent implements OnInit, OnDestroy {

  public currentPage = 1;
  public minis: Mini[];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private miniService: MiniService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.miniService.getAll(this.currentPage).subscribe((response: Mini[]) => {

        this.minis = response;
        this.currentPage ++;

      })
    )

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
