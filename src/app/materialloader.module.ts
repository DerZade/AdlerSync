import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule } from '@angular/material';


import { AppComponent } from './app.component';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule],
  exports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule]
})
export class MaterialLoaderModule { }
