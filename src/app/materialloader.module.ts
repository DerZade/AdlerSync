import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule, MatTooltipModule } from '@angular/material';


import { AppComponent } from './app.component';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule, MatTooltipModule],
  exports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatChipsModule, MatExpansionModule, MatRadioModule, MatSelectModule, MatTooltipModule]
})
export class MaterialLoaderModule { }
