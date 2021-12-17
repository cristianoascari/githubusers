// Angular modules.
import { Injectable } from '@angular/core';

// Angular Material.
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class NotificationsService {
  constructor(private _snackBar: MatSnackBar) {}

  public showNotifcation(message: string, action: string): void {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
