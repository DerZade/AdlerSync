import { Mod } from './mod';

export class Modset {
  public name: string;
  public repoId: number;
  public mods: Mod[] = [];
  public isEvent: boolean = true;

  public keepUpdated: boolean = false;
  public expanded: boolean = true;

  constructor(n: string, repo: number) {
    this.name = n;
    this.repoId = repo;

    this.mods.push(new Mod(this.repoId,  'BackpackOnChest'));
    this.mods.push(new Mod(this.repoId,  'grad_slingHelmet'));
    this.mods.push(new Mod(this.repoId, 'grad_trenches'))
    this.mods.push(new Mod(this.repoId, 'grad_trenches'))
  }

}
