import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    PasswordModule,
    SelectModule,
    FormFieldModule
  ],
  exports: [
    InputModule,
    PasswordModule,
    SelectModule,
    FormFieldModule
  ]
})
export class ControlsModule { }
