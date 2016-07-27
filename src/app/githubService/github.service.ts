import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  private headers = new Headers({ 'Authorization': 'Basic ' });
  private reposUrl = 'https://api.github.com/users/parth-r-patel/repos';
  private zenUrl = 'https://api.github.com/zen';

  constructor(private http: Http) {}

  private extractJsonData(res: Response) {
    var body = res.json();
    return body || {};
  }

  private extractTextData(res: Response) {
    var body = res.text();
    return body || "";
  }

  getGithubRepos(): Observable<Object[]> {
    return this.http.get(this.reposUrl, {headers: this.headers})
    .map(this.extractJsonData)
    .catch(this.handleError);
  }

  getGithubZen(): Observable<String> {
    return this.http.get(this.zenUrl, {headers: this.headers})
    .map(this.extractTextData)
    .catch(this.handleError);
  }

  private handleError (error: any) {
    var errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
};
