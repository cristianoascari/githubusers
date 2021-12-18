// Angular modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// App environment.
import { environment } from 'src/environments/environment';

// App models.
import { IGithubRepository, IGithubSearch, IGithubUser } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiURL: string = environment.githubapi.users;
  private apiSearchURL: string = environment.githubapi.search;

  constructor(private http: HttpClient) {}

  public getUsers(page: number): Observable<IGithubUser[]> {
    return this.http.get<IGithubUser[]>(`${this.apiURL}?page=${page}`);
  }

  public getUser(userId: number): Observable<IGithubUser> {
    return this.http.get<IGithubUser>(this.apiURL + '/' + userId);
  }

  public searchUsers(q: string, page: number): Observable<IGithubSearch> {
    return this.http.get<IGithubSearch>(`${this.apiSearchURL}?q=${q}&page=${page}`);
  }

  public getUserRepositories(userLogin: string): Observable<IGithubRepository[]> {
    return this.http.get<IGithubRepository[]>(`https://api.github.com/users/${userLogin}/repos`);
  }
}
