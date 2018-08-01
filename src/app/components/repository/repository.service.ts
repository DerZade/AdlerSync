import { Injectable } from '@angular/core';
import { Repository } from './repository';


@Injectable()
export class RepositoryService {
  public repos: Repository[] = [];

  constructor() {
    this.repos.push(new Repository('Gruppe Adler Main', 'https://gruppe-adler.de/arma3sync/.a3s/autoconfig'));
    this.repos.push(new Repository('3CommandoBrigade', 'http://repo.3commandobrigade.com/autoconfig'));
  }

}
