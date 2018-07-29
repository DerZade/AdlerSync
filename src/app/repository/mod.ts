import { Repository } from './repository';

export class Mod {
  constructor(
    public repo: Repository,
    public state: string = '',
    public name: string = 'Mod',
    public path: string = ''
  ) {}

}
