import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// zxcvbn
import * as zxcvbn from 'zxcvbn';

export class PasswordStrengthValidator {

  constructor() { }

  static minScore = (minScore?): ValidatorFn => {

    return (control: AbstractControl): ValidationErrors | null => {

      const STRENGTH = zxcvbn(control.value);

      if (control.value !== '' && STRENGTH.score < minScore) {

        return {
          minScore: true
        };

      }

      return null;

    };

  }
}
