import { Component } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  repos: any ;
  config: any

  constructor(private gitHubService: GithubService ) {    
  }

  ngOnInit(): void {
    this.gitHubService.loadRepos().subscribe( res => {
      this.repos = res;
    })
  }


}
