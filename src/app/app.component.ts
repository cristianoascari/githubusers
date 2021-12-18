// Angular modules.
import { Component, HostListener } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App services.
import { LanguageService } from 'src/app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public scrollTopTopIcon: boolean = false;

  constructor(
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.setLanguage();
  }

  private setLanguage(): void {
    this.translate.setDefaultLang('pt-BR');
    this.translate.use(this.languageService.getTranslatorLanguage());
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any): void {
    const verticalOffset: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollTopTopIcon = verticalOffset > window.innerHeight;
  }
}
