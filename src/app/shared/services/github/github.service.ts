// Angular modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// App environment.
import { environment } from 'src/environments/environment';

// App models.
import { IGithubUser } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiURL: string = environment.githubapi.users;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IGithubUser[]> {
    return this.http.get<IGithubUser[]>(this.apiURL);
  }

  public getUser(userId: number): Observable<IGithubUser> {
    return this.http.get<IGithubUser>(this.apiURL + '/' + userId);
  }
}
