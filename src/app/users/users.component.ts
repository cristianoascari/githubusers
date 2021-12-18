// Angular modules.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser } from 'src/app/shared/models';

// App services.
import { GithubService } from 'src/app/shared/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IGithubUser[] = [];

  public viewMode: string = 'grid';

  public isLoading: boolean = true;

  constructor(
    private githubService: GithubService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.isLoading = true;

    this.githubService.getUsers().subscribe(
      res => this.users = res as IGithubUser[],
      err => console.log(err),
      () => setTimeout(() => { this.isLoading = false; }, 500)
    );
  }

  public viewUserProfile(userId: string): void {
    this.router.navigate(['user/' + userId]);
  }

  public changeViewMode(mode: string): void {
    this.viewMode = mode;
  }
}
