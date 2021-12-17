import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { UsersComponent } from 'src/app/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'user/:id', component: ProfileComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
