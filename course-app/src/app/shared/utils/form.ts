import { FormGroup } from "@angular/forms";

// Mark those form fields that are touched/inserted
export const markFormGroupTouched = (formGroup: FormGroup) => {
    (Object as any).values(formGroup.controls).forEach(
        (control: any) => {
            control.markAsTouched();

            // If form controls have children form elements; call function again
            if(control.controls) {
                markFormGroupTouched(control);
            }
        }
    )
}