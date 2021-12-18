// Angular modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App guards.
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';

// App components.
import { AuthComponent } from 'src/app/auth/auth.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { UsersComponent } from 'src/app/users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent},
  {path: 'user/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
