import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { RepositoryComponent } from './repository/repository.component';
import { ModsetComponent } from './modset/modset.component';
import { ModComponent } from './mod/mod.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialLoaderModule } from '../materialloader.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialLoaderModule
  ],
  declarations: [
    RepositoryComponent,
    ModComponent,
    ModsetComponent
  ],
  providers: [
    RepositoryService
  ],
  exports: [
    RepositoryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RepositoryModule { }
