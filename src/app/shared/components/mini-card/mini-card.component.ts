import { Component, Input, OnInit } from '@angular/core';

// Models
import { Mini } from '@core/services/mini/models';

// Services
import { MiniService } from '@core/services/mini/mini.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {

  @Input() mini: Mini;

  constructor(
    public miniService: MiniService
  ) { }

  ngOnInit(): void {}
}
