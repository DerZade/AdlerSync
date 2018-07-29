import { Repository } from './repository';
import { Mod } from './mod';

export class Modset {
  constructor(
    public name: string,
    public repo: Repository,
    public mods: Mod[] = [],
    public isEvent: boolean = true,
    public keepUpdated: boolean = false
  ) {
    this.mods.push(new Mod(this.repo, "updated", "BackpackOnChest"));
    this.mods.push(new Mod(this.repo, "update-needed", "grad_slingHelmet"));
    this.mods.push(new Mod(this.repo, "queued","grad_trenches"))
    this.mods.push(new Mod(this.repo, "updating","grad_trenches"))
  }

}
