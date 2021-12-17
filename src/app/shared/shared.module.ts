// Angular modules.
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';

// Third-party.
import { TranslateModule } from '@ngx-translate/core';

// App services.
import { LanguageService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    TranslateModule,

    LanguageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
