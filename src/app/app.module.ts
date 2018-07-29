import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialLoaderModule } from './materialloader.module';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
