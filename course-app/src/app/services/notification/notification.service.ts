import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './component';

/**
 *  ng g module services/notification
 *  ng g service services/notification/notification
 */
@Injectable()
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: {message},
      panelClass: ['mat-snackbar_error'] // Add CSS Class from mat-snackbar.scss
    })

  }

  
  success(message: string): void {
    
  this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: {message},
      panelClass: ['mat-snackbar_success'] // Add CSS Class from mat-snackbar.scss
    })

  }
}
