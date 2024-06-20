import { UntypedFormGroup, ValidationErrors } from '@angular/forms';

/**
 * Interface for creating validation messages
 */
interface ErrorMessage {
  /**
   * The error key to look for on the FormControl.errors object
   */
  error: string;
  /**
   * The format string function to create the validation format to be displayed.
   * @param label The text from the first <label> tag found within the .form-group
   * @param error The value accessed from FormControl.errors[error] using ErrorMessage.error as the key
   */
  format?: FormatErrorFunction;
}

export type FormatErrorFunction = (label?: string, error?: any) => string;

export function mustMatch(controlName: string, matchingControlName: string): (formGroup: UntypedFormGroup) => ValidationErrors {
  return (formGroup: UntypedFormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export const mustMatchError: ErrorMessage[] = [
  {
    error: 'mustMatch',
    format: (label: string, error: any) => `${label} does not match`,
  },
];
