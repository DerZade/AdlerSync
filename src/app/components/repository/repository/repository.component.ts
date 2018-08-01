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

  @Input() model: Repository;
  constructor(public repositoryService: RepositoryService) {
  }

  ngOnInit() {
  }

  public onSelectModset(modset: Modset) {
    this.model.modset = modset;
  }

  public upToDateText(): string {
    var now: Date = new Date();
    var synced: Date = this.model.lastSynced;

    var durationMili: number = now.valueOf() - synced.valueOf();

    var durationMinutes: number = Math.floor(durationMili / 60000);

    if (durationMinutes < 2) {
      return 'gerade eben aktualisiert';
    }

    return 'vor '+ durationMinutes + ' Minuten aktualisiert';
  }

}
