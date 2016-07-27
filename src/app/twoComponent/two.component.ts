import { Component, Output, EventEmitter } from "@angular/core";
import { HTTP_PROVIDERS } from '@angular/http';

import { GithubService } from './../githubService/github.service';

@Component({
  selector: "two",
  templateUrl: './two.component.html',
  providers: [
    HTTP_PROVIDERS,
    GithubService
  ]
})
export class TwoComponent {
  greeting: Object;
  repos: Object[];

  constructor(private githubService: GithubService) {}

  getMessage() {
    this.githubService.getGithubZen().subscribe(
      x => this.greeting = x
    );
  }

  getRepos() {
    this.githubService.getGithubRepos().subscribe(
      x => this.repos = x
    );
  }

  onClick(e: Event) {
    e.srcElement.innerHTML == "Zen" ? this.getMessage() : this.getRepos();
  }
}
