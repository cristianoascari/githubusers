// Angular modules.
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// App models.
import { IUser } from 'src/app/shared/models';

// App services.
import { AuthService } from 'src/app/shared/services';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const u: string|null = sessionStorage.getItem('u');
    if (u) {
      const user: IUser = JSON.parse(u) as IUser;
      if (!user?.email) {
        this.forceLogout();
        return false;
      }
      return true;
    }
    this.forceLogout();
    return false;
  }

  private forceLogout(): void {
    this.authService.logout();
  }
  
}
