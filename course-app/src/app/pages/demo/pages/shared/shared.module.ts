import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule, ControlsModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    ControlsModule,
    ReactiveFormsModule // https://stackoverflow.com/a/39152110 
  ]
})
export class SharedModule { }
