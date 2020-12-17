import { Component, Input, OnInit } from '@angular/core';

// Models
import { Creator } from '@core/services/creator/models';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.scss']
})
export class CreatorCardComponent implements OnInit {

  @Input() creator: Creator;

  constructor() { }

  ngOnInit(): void {}
}
