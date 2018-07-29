import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';


import { AppComponent } from './app.component';


@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule]
})
export class MaterialLoaderModule { }
