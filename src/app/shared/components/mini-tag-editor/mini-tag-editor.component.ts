import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

// UIkit
declare const UIkit: any;

// Models
import { Mini } from '@core/services/mini/models'

@Component({
  selector: 'app-mini-tag-editor',
  templateUrl: './mini-tag-editor.component.html',
  styleUrls: ['./mini-tag-editor.component.scss']
})
export class MiniTagEditorComponent implements OnInit {

  @ViewChild('guidanceAlert', { read: ElementRef, static: true }) guidanceAlert;

  @Input() mini: Mini;

  constructor() { }

  ngOnInit(): void { }

  public closeAlert() {

    UIkit.alert(this.guidanceAlert.nativeElement).close();

  }
}
