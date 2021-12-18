// Angular modules.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  public goHome(): void {
    this.router.navigate(['']);
  }
}
