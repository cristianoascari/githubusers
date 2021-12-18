// Angular modules.
import { Router } from '@angular/router';
import { Component } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-not-found',
  templateUrl: './profile-not-found.component.html',
  styleUrls: ['./profile-not-found.component.scss']
})
export class ProfileNotFoundComponent {
  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  public goHome(): void {
    this.router.navigate(['']);
  }
}
