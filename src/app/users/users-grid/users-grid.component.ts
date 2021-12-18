// Angular modules.
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser } from 'src/app/shared/models';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit {
  @Input() users!: IGithubUser[];

  @Output() viewProfile: EventEmitter<string> = new EventEmitter<string>();

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  public viewUserProfile(login: string): void {
    this.viewProfile.emit(login);
  }
}
