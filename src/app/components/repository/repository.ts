import { Modset } from './modset';
import { Mod } from './mod';

export class Repository {
  public id: number;
  public name: string;
  public lastSynced: Date = new Date();
  public picture: string = '';
  public autoconfigPath: string = '';
  public state: string = 'up-to-date';
  public mods: Mod[] = [];
  public modset: Modset;
  public modsets: Modset[] = [];
  public events: Modset[] = [];

  constructor(n: string, a: string, lookForUpdates: boolean = false) {
    this.name = n;
    this.autoconfigPath = a;

    if (lookForUpdates) {
      //TODO: Look for Updates
    }

    this.events.push(new Modset('Event 1', this));
    this.events.push(new Modset('Event 2', this));

    this.modset=this.events[0];

  }

}
