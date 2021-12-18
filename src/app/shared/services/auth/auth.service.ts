// Angular modules.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// App models.
import { EBroadcast, IUser } from 'src/app/shared/models';

// App services.
import { BroadcastService } from 'src/app/shared/services';

@Injectable({providedIn: 'root'})
export class AuthService {
  /**
   * 
   * NOTA:
   * Fiz apenas uma simulação de autenticação.
   * Os dados ficam abertos no SessionStorage.
   * 
   */

  constructor(
    private broadcastService: BroadcastService,
    private router: Router
  ) {}

  public authenticateUser(email: string, password: string): Promise<IUser> {
    const promise = new Promise<IUser>((resolve, reject) => {
      if (email && password && password.length >= 5) {
        const user: IUser = {email, name: 'User Test'};
        sessionStorage.setItem('u', JSON.stringify(user));
        resolve(user);
      } else {
        reject('Dados inválidos');
      }
    });
    return promise;
  }

  public getLoggedUser(): IUser | null {
    const u: string | null = sessionStorage.getItem('u');
    if (u) {
      return JSON.parse(u) as IUser;
    }
    return null;
  }

  public logout(): void {
    sessionStorage.removeItem('u');
    this.broadcastService.sendBroadcast(EBroadcast.Logout);
    this.router.navigate(['/login']);
  }
}
