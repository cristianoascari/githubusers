// Angular modules.
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

// Third-party
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// App components.
import { ProfileComponent } from './profile.component';
import { ProfileNotFoundComponent } from './profile-not-found/profile-not-found.component';
import { ProfileUserDataComponent } from './profile-user-data/profile-user-data.component';
import { ProfileUserReposComponent } from './profile-user-repos/profile-user-repos.component';

// @ngx-translate: AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) { return new TranslateHttpLoader(http); }

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNotFoundComponent,
    ProfileUserDataComponent,
    ProfileUserReposComponent
  ],
  imports: [
    CommonModule,

    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule,

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
export class ProfileModule { }
