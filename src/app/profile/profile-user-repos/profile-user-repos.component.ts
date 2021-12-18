// Angular modules.
import { Component, Input, OnInit } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser, IGithubRepository } from 'src/app/shared/models';

// App services.
import { GithubService } from 'src/app/shared/services';

@Component({
  selector: 'app-profile-user-repos',
  templateUrl: './profile-user-repos.component.html',
  styleUrls: ['./profile-user-repos.component.scss']
})
export class ProfileUserReposComponent implements OnInit {
  @Input() user!: IGithubUser;
  public repos: IGithubRepository[] = [];

  public isLoading: boolean = true;

  constructor(
    private githubService: GithubService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  private getRepositories(): void {
    this.isLoading = true;

    this.githubService.getUserRepositories(this.user.login).subscribe(
      res => this.repos = res as IGithubRepository[],
      err => console.log(err),
      () => this.isLoading = false
    );
  }
}
