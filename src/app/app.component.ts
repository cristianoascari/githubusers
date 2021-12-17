// Angular modules.
import { Component } from '@angular/core';

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
}
