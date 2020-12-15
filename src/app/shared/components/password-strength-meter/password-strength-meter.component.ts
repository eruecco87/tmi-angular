import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

// zxcvbn
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.scss']
})
export class PasswordStrengthMeterComponent implements OnInit, OnChanges {

  @Input() password: string;

  public score = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.password.currentValue) {

      const STRENGTH = zxcvbn(changes.password.currentValue);
      this.score = STRENGTH.score;

    } else {

      this.score = 0;

    }

  }

}
