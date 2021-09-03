import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    PasswordModule,
    FormFieldModule
  ],
  exports: [
    InputModule,
    PasswordModule,
    FormFieldModule
  ]
})
export class ControlsModule { }
