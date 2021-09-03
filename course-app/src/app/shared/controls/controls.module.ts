import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    FormFieldModule
  ],
  exports: [
    InputModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    FormFieldModule
  ]
})
export class ControlsModule { }
