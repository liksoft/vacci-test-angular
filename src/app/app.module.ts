import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./lib/views/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// Register Fr local for it to be applied to global application local
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import localeFrExtra from "@angular/common/locales/extra/fr";
import { environment } from "src/environments/environment";
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpModule } from "./lib/core/http";
import { StorageModule } from "./lib/core/storage";
import { AuthModule } from "./lib/core/auth";
import { parseV2HttpResponse } from "./lib/core/http/core/v2/http-response";
import {
  UIStateModule,
  UIStateProvider,
  UIStateStatusCode,
  UI_STATE_PROVIDER,
} from "./lib/core/ui-state";
import { UIStateComponentsModule } from "./lib/views/partials/ui-state-components";
import { DynamicFormControlModule } from "./lib/core/components/dynamic-inputs/angular";
import { LocalStrategy, StrategyBasedAuthModule } from "./lib/views/login/core";
import {
  AuthStrategies,
  AUTH_ACTION_HANDLERS,
  AUTH_CLIENT_CONFIG,
  AUTH_SERVICE_CONFIG,
} from "./lib/views/login/constants";
import { Router } from "@angular/router";
import { interval } from "rxjs";
import { first, tap } from "rxjs/operators";
import { SecureWebStorage } from "./lib/core/storage/core";
import { SESSION_STORAGE } from "./lib/core/utils/ng/common";
import { DROPZONE_DICT } from "./lib/core/components/dropzone";
import { DropzoneDictLoader } from "./dropzone";

registerLocaleData(localeFr, "fr", localeFrExtra);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export class TranslateHandler implements MissingTranslationHandler {
  handle = (params: MissingTranslationHandlerParams) => {
    return params.key;
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: environment?.production
        ? undefined
        : {
            provide: MissingTranslationHandler,
            useClass: TranslateHandler,
          },
    }),
    SharedModule.forRoot(),
    HttpModule.forRoot({
      serverURL: environment.api.host,
      requestResponseHandler: parseV2HttpResponse,
    }),
    StorageModule.forRoot({ secretKey: environment.APP_SECRET }),
    AuthModule.forRoot(),
    // UI STATE PROVIDERS
    UIStateModule.forRoot(),
    UIStateComponentsModule.forRoot(),
    // DYNAMIC CONTROLS PROVIDERS
    DynamicFormControlModule.forRoot({
      serverConfigs: {
        host: environment.forms.host,
        bindingsPath: environment.forms.endpoints.bindingsPath,
      },
      formsAssets: "/assets/resources/jsonforms.json",
      dropzoneConfigs: {
        url: environment.APP_FILE_SERVER_URL,
        maxFilesize: 10,
        acceptedFiles: "image/*",
        autoProcessQueue: false,
        uploadMultiple: false,
        maxFiles: 1,
        addRemoveLinks: true,
      },
    }),
    // TODO: ADD STRATEGY BASED AUTH MODULE
    StrategyBasedAuthModule.forRoot(
      {
        provide: AUTH_ACTION_HANDLERS,
        useFactory: (uiState: UIStateProvider, router: Router) => {
          return {
            onAuthenticationFailure: () => {
              uiState.endAction(
                "login.authenticationFailed",
                UIStateStatusCode.BAD
              );
            },
            onAuthenticaltionSuccessful: () => {
              console.log("Redirecting...");
              uiState.endAction(
                "login.successful",
                UIStateStatusCode.AUTHENTICATED
              );
            },
            onPerformingAction: () => {
              uiState.startAction();
            },
            onError: () => {
              uiState.endAction("", UIStateStatusCode.ERROR);
            },
            onLogout: () => {
              interval(300)
                .pipe(
                  first(),
                  tap(() => {
                    router.navigateByUrl("/login");
                    uiState.endAction();
                  })
                )
                .subscribe();
            },
          };
        },
        deps: [UI_STATE_PROVIDER, Router],
      },
      {
        provide: AUTH_SERVICE_CONFIG,
        useFactory: (client: HttpClient, storage: Storage) => ({
          strategies: [
            {
              id: AuthStrategies.LOCAL,
              strategy: new LocalStrategy(
                client,
                environment.auth.host,
                new SecureWebStorage(storage, environment.APP_SECRET)
              ),
            },
          ],
          autoLogin: true,
        }),
        deps: [HttpClient, SESSION_STORAGE],
      }
    ),
  ],
  providers: [
    TranslateService,
    {
      provide: DROPZONE_DICT,
      useFactory: async (translate: TranslateService) => {
        return await DropzoneDictLoader(translate);
      },
      deps: [TranslateService],
    },
    {
      provide: "FILE_STORE_PATH",
      useValue: environment.APP_FILE_SERVER_URL,
    },
    {
      provide: AUTH_CLIENT_CONFIG,
      useValue: {
        id: environment.auth.clientID,
        secret: environment.auth.clientSecret,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
