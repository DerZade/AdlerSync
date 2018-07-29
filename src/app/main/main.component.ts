import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository/repository.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  selector: 'app-main'
})
export class MainComponent implements OnInit {
  public refreshInProgress = false;
  public preferences = true;

  constructor(public repositoryService: RepositoryService) { }

  ngOnInit() {
  }

  public refresh(): void {
    this.refreshInProgress = !this.refreshInProgress;
  }
}
