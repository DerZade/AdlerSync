import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialLoaderModule } from '../../materialloader.module';

import { RepositoryComponent } from './repository/repository.component';
import { ModsetComponent } from './modset/modset.component';
import { ModComponent } from './mod/mod.component';
import { HelperComponent } from '../helper/helpercomponent';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialLoaderModule,
    FormsModule
  ],
  declarations: [
    RepositoryComponent,
    ModComponent,
    ModsetComponent,
    HelperComponent
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
