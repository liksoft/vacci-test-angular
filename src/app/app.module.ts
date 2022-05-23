import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './lib/views/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Register Fr local for it to be applied to global application local
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { CoreComponentModule } from './lib/core/components';
import { DrewlabsHttpModule } from './lib/core/http';
import { StorageModule } from './lib/core/storage';
import { AuthTokenModule } from './lib/core/auth-token';
import { AuthModule } from './lib/core/auth';
import { environment } from 'src/environments/environment';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './lib/core/translator';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { AppComponentsLoadingComponent } from './lib/views/partials/ui-state-components/app-component-loader.component';
import { AppUINotificationComponent } from './lib/views/partials/ui-state-components/app-ui-notification.component';
import { DrewlabsV2LoginResultHandlerFunc } from './lib/core/rxjs/operators';
import { parseV2HttpResponse } from './lib/core/http/core/v2/http-response';
import { DynamicFormControlModule } from './lib/core/components/dynamic-inputs/dynamic-form-control';


// import { HomeComponent } from './home/home.component';
// import { FormsComponent } from './forms/forms.component';
// import { FormPointsComponent } from './pages/form-points/form-points.component';

registerLocaleData(localeFr, 'fr', localeFrExtra);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export class TranslateHandler implements MissingTranslationHandler {
  handle = (params: MissingTranslationHandlerParams) => {
    return params.key;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    AppComponentsLoadingComponent,
    AppUINotificationComponent,
    //CustomerhomeComponent,
    //HomeComponent,
    //FormsComponent,
    //FormPointsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: [{ provide: MissingTranslationHandler, useClass: TranslateHandler }]
    }),
    SharedModule.forRoot(),
    CoreComponentModule.forRoot(),
    DrewlabsHttpModule.forRoot({
      serverURL: environment.APP_SERVER_URL,
      requestResponseHandler: parseV2HttpResponse // Modifiable
    }),
    StorageModule.forRoot({ secretKey: environment.APP_SECRET }),
    AuthTokenModule.forRoot({}),
    AuthModule.forRoot({
      loginResponseHandler: DrewlabsV2LoginResultHandlerFunc,
      serverConfigs: {
        host: 'http://127.0.0.1:8000',
        loginPath: 'login',
        logoutPath: 'auth/logout',
        usersPath: 'admin/users',
        //harry add
        rhhost: 'http://127.0.0.1:8000',
        rhloginPath: 'rh/login',
      }
    }),
    BrowserAnimationsModule,
    DynamicFormControlModule.forRoot({
      serverConfigs: {
        host: environment.FORM_SERVER_URL
      }
    })
  ],
  providers: [
    TranslationService,
    TranslateService,
    {
      provide: DROPZONE_CONFIG,
      useValue: {
        url: environment.APP_FILE_SERVER_URL,
        maxFilesize: 10,
        acceptedFiles: null,
        autoProcessQueue: false,
        uploadMultiple: false,
        maxFiles: 1,
        addRemoveLinks: true
      }
    },
    {
      provide: 'FILE_STORE_PATH',
      useValue: environment.APP_FILE_SERVER_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
