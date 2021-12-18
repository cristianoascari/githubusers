// Angular modules.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { EBroadcast, IUser } from 'src/app/shared/models';

// App services.
import { AuthService, BroadcastService, LanguageService, NotificationsService } from 'src/app/shared/services';

interface IMenu {
  children: IMenuItem[];
  id: string;
  name: string;
}

interface IMenuItem {
  id: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: IUser|null = this.authService.getLoggedUser();

  public curLang: string = this.languageService.getTranslatorLanguage();
  public curTheme: string = 'light';
  public menuLanguages: IMenu = this.buildLanguagesMenu();
  public menuThemes: IMenu = this.buildLanguagesMenu();

  constructor(
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private languageService: LanguageService,
    private notificationsService: NotificationsService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.subscribeToBroadcasts();

    setTimeout(() => {
      this.menuLanguages = this.buildLanguagesMenu();
      this.menuThemes = this.buildThemeMenu();
    }, 500);
  }

  public changeLanguage(lang: string, event?: any): void {
    if (event) {
      event.stopPropagation();
    }

    this.curLang = lang;
    this.translate.use(lang);
  }

  public changeTheme(theme: string, event?: any): void {
    if (event) {
      event.stopPropagation();
    }

    this.notificationsService.showNotifcation('TO DO...', 'Fechar');
  }

  private buildLanguagesMenu(): IMenu {
    return {
      children: [
        {id: 'en-US', name: 'en-US'},
        {id: 'pt-BR', name: 'pt-BR'},
      ],
      id: 'lang',
      name: this.translate.instant('menu.language.language')
    };
  }

  private buildThemeMenu(): IMenu {
    return {
      children: [
        {id: 'light', name: this.translate.instant('menu.theme.light')},
        {id: 'dark', name: this.translate.instant('menu.theme.dark')},
      ],
      id: 'theme',
      name: this.translate.instant('menu.theme.dark')
    };
  }

  private subscribeToBroadcasts(): void {
    this.broadcastService.events.subscribe(ev => {
      switch (ev.key) {
        case EBroadcast.Login: this.user = ev.value; break;
        case EBroadcast.Logout: this.user = null; break;
      }
    });
  }

  public goHome(): void {
    this.router.navigate(['']);
  }

  public logoutUser(): void {
    this.authService.logout();
  }
}
