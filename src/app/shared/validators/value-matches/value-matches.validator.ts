import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValueMatchesValidator {

  constructor() { }

  static match = (compare: string, to: string): ValidatorFn => {

    return (formGroup: FormGroup): ValidationErrors | null => {

      if (formGroup.get(compare).value !== '' && formGroup.get(to).value !== '') {

        if (formGroup.get(compare).value !== formGroup.get(to).value) {

          const TO = to.charAt(0).toUpperCase() + to.substring(1, to.length);

          return {
            [compare + 'To' + TO + 'NoMatch']: true
          };

        }

        return null;

      }

      return null;

    };

  }
}
