export class Mod {

  public repoId: number;
  public name: string = 'Mod';
  public state: string = 'up-to-date';
  public path: string = '';

  constructor(repo: number, n: string) {
    this.repoId = repo;
    this.name = n;
  }

}
