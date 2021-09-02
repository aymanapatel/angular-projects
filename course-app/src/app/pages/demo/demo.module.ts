import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { StylesComponent } from './pages/styles/styles.component';
import { SharedComponent } from './pages/shared/shared.component';


@NgModule({
  declarations: [
    DemoComponent,
    StylesComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
