import { Component } from '@angular/core';
// import * as electron from 'electron';
const electron = requireNode('electron');

@Component({
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  selector: 'app-menubar'
})
export class MenubarComponent {

  constructor() {
  }

  public minimize(): void {
    this.getWindow().minimize();
  }

  public maximize(): void {
    const window = this.getWindow();
    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }

  public close(): void {
    this.getWindow().close();
  }

  private getWindow(): any {
    return electron.remote.getCurrentWindow();
  }
}
