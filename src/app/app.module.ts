import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialLoaderModule } from './materialloader.module';
import { RepositoryModule } from './components/repository/repository.module';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MainComponent } from './components/main/main.component';
import { ArmaService } from './services/arma.service';
import { DownloadService } from './services/download.service';
import { PreferencesService } from './services/preferences.service';



@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RepositoryModule,
    BrowserAnimationsModule,
    MaterialLoaderModule
  ],
  providers: [
    ArmaService,
    DownloadService,
    PreferencesService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
