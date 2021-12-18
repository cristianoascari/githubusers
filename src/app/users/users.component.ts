// Angular modules.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { IGithubSearch, IGithubUser } from 'src/app/shared/models';

// App services.
import { GithubService } from 'src/app/shared/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IGithubUser[] = [];

  public viewMode: string = sessionStorage.getItem('v') || 'grid';

  public searchPage: number = 0;
  public searchValue: any = sessionStorage.getItem('s');
  public totalResults: number = 0;

  public isLoading: boolean = true;
  public isSearching: boolean = false;

  constructor(
    private githubService: GithubService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.searchValue) {
      this.searchUsers();
    } else {
      this.getUsers();
    }
  }

  private getUsers(): void {
    this.isLoading = true;

    this.githubService.getUsers(++this.searchPage).subscribe(
      res => {
        this.users = res as IGithubUser[];
        this.totalResults = this.users.length;
      },
      err => console.log(err),
      () => setTimeout(() => { this.isLoading = false; }, 500)
    );
  }

  public searchUsers(clearResults: boolean = false): void {
    if (clearResults && !this.searchValue) {
      this.clearSearch();
    } else {
      this.isSearching = true;
      sessionStorage.setItem('s', this.searchValue);

      if (clearResults) {
        this.users = [];
      }

      this.githubService.searchUsers(this.searchValue, ++this.searchPage).subscribe(
        res => {
          const results: IGithubSearch = res as IGithubSearch;
          results.items.map(i => this.users.push(i));
          this.totalResults = results.total_count;
        },
        err => console.log(err),
        () => {
          this.isLoading = false;
          this.isSearching = false;
        }
      );
    }
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.totalResults = 0;
    sessionStorage.removeItem('s');
    this.getUsers();
  }

  public viewUserProfile(userId: string): void {
    this.router.navigate(['user/' + userId]);
  }

  public changeViewMode(mode: string): void {
    this.viewMode = mode;
    sessionStorage.setItem('v', mode);
  }

  public getTotalText(): string {
    const text: string = this.totalResults > 1 ? 'search.results' : 'search.result';
    return this.totalResults + ' ' + (this.translate.instant(text)).toLowerCase();
  }
}
