import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule, ControlsModule, IndicatorsModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule, // https://stackoverflow.com/a/39152110 
    ButtonModule,
    ControlsModule,
    IndicatorsModule
  ]
})
export class SharedModule { }
