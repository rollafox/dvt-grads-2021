import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface FormConfiguration {
  prop: string;
  defaultValue?: string;
  isDisabled?: boolean;
  validators?: Validators;
}

export class FormGroupHelper {
  public static CreateFormGroup(
    configs: FormConfiguration[],
    existingValues: { [key: string]: string } = {},
    isDirty = false
  ): FormGroup {
    const newFormGroup = new FormGroup({});

    configs.forEach((config) => {
      newFormGroup.addControl(
        config.prop,
        new FormControl({
            value: existingValues[config.prop] || config.defaultValue || '',
            disabled: config.isDisabled
          },
          config.validators
        )
      );
      if (isDirty) {
        newFormGroup.get(config.prop)?.markAsDirty();
      }
    });
    return newFormGroup;
  }
}
