import { Injectable } from '@angular/core';
import { Repository } from './repository';


@Injectable()
export class RepositoryService {
  public repos: Repository[] = [];

  constructor() {
    this.repos.push(new Repository('Gruppe Adler Main'));
  }

}
