import { Modset } from './modset';

export class Repository {
  public name: string;
  public picture: string = '';
  public autoconfigPath: string = '';
  public state: string = 'up-to-date';
  public modset: Modset;
  public modsets: Modset[] = [];
  public events: Modset[] = [];

  constructor(n: string) {
    this.name = n;

    this.events.push(new Modset('Event 1', this));
    this.events.push(new Modset('Event 2', this));

    this.modset=this.events[0];

  }

}
