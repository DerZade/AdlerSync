import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repository } from '../repository';
import { Modset } from '../modset';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  contextMenuShown: boolean = false;
  expanded: boolean = true;

  @Input() model: Repository;
  constructor(public repositoryService: RepositoryService) {
  }

  ngOnInit() {
  }

  public onSelectModset(modset: Modset) {
    this.model.modset = modset;
  }

}
