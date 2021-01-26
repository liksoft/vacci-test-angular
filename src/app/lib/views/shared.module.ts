import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { CoreComponentModule } from '../core/components';
import { DrewlabsHttpModule } from '../core/http';
import { StorageModule } from '../core/storage';
import { AuthTokenModule } from '../core/auth-token';
import { AuthModule } from '../core/auth';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    DragDropModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ClarityModule,
    TranslateModule,
    CoreComponentModule,
    DrewlabsHttpModule,
    StorageModule,
    AuthTokenModule,
    AuthModule,
    DragDropModule
  ],
  declarations: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: LOCALE_ID, useValue: 'fr' }
      ]
    };
  }
}
