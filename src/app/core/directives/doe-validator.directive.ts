import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, FormControl, Validator } from '@angular/forms';
import { CustomValidators } from '../utils/custom.validator';

@Directive({
  selector: '[appDoeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DoeValidatorDirective,
      multi: true
    }
  ]
})
export class DoeValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = CustomValidators.CannotBeDoe();
  }

  validate(c: FormControl): { [key: string]: boolean } | null {
    return  CustomValidators.CannotBeDoe()(c);
  }

}
