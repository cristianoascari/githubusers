// Angular modules.
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LanguageService {
  public getBrowserLanguage(): string {
    return navigator.languages && navigator.languages[0] || navigator.language;
  }

  public getTranslatorLanguage(): string {
    const lang: string = this.getBrowserLanguage();
    switch (lang) {
      case 'en': case 'en-US': return 'en-US'; break;
      case 'pt': case 'pt-BR': return 'pt-BR'; break;
      default: return 'pt-BR';
    }
  }
}
