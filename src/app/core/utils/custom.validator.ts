import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators{

  public static CannotBeDoe(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      console.log('Value Accessor -> ', control.value)
      if (control.value !== undefined && control.value?.toLowerCase() === 'doe') {
        return { cannotBeDoe: true };
      }
      return null;
    };
  }
}
