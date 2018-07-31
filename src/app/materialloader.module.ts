import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule } from '@angular/material';


import { AppComponent } from './app.component';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule],
  exports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule]
})
export class MaterialLoaderModule { }
