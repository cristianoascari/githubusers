// Angular modules.
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';

// Angular Material.
import { MatIconModule } from '@angular/material/icon';

// Third-party.
import { TranslateModule } from '@ngx-translate/core';

// App components.
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

// App services.
import { LanguageService } from './services';

@NgModule({
  declarations: [
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,

    MatIconModule,

    TranslateModule,

    LanguageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
