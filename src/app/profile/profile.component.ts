// Angular modules.
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubUser } from 'src/app/shared/models';

// App services.
import { GithubService } from 'src/app/shared/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user!: IGithubUser;

  public isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getUser(params.id);
      }
    });
  }

  private getUser(userId: number): void {
    this.isLoading = true;

    this.githubService.getUser(userId).subscribe(
      res => this.user = res as IGithubUser,
      err => console.log(err),
      () => setTimeout(() => { this.isLoading = false; }, 500)
    );
  }
}
