// Angular modules.
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser } from 'src/app/shared/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users!: IGithubUser[];

  @Output() viewProfile: EventEmitter<string> = new EventEmitter<string>();

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  public viewUserProfile(login: string): void {
    this.viewProfile.emit(login);
  }
}
