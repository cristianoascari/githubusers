// Angular modules.
import { Component, Input, OnInit } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser } from 'src/app/shared/models';

@Component({
  selector: 'app-profile-user-data',
  templateUrl: './profile-user-data.component.html',
  styleUrls: ['./profile-user-data.component.scss']
})
export class ProfileUserDataComponent implements OnInit {
  @Input() user!: IGithubUser;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
