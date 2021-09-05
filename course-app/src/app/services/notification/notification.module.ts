import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NotificationService } from "./notification.service";
import { NotificationComponent } from './component/notification/notification.component';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class NotificationModule {

  static forRoot(): ModuleWithProviders<NotificationModule> { // Create Notification Service only once in application
    return {
      ngModule: NotificationModule,
      providers: [
        NotificationService
      ]
    }
  } 

 }
