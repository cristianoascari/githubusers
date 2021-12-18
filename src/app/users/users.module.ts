// Angular modules.
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Angular Material.
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Third-party
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// App components.
import { UsersComponent } from './users.component';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersListComponent } from './users-list/users-list.component';

// @ngx-translate: AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) { return new TranslateHttpLoader(http); }

@NgModule({
  declarations: [
    UsersComponent,
    UsersGridComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,

    InfiniteScrollModule,
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
