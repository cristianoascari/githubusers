// Angular modules.
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Angular Material.
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Third-party
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// App components.
import { UsersComponent } from './users.component';

// @ngx-translate: AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) { return new TranslateHttpLoader(http); }

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule { }
