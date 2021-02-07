import { Component, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { AbstractAlertableComponent } from 'src/app/lib/core/helpers/component-interfaces';
import { AppUIStoreManager, ActionResponseParams } from 'src/app/lib/core/helpers/app-ui-store-manager.service';
import { AppConfigs } from 'src/app/lib/bloc/models/app-configs';
import { GlobalConfigurationsFormComponent } from './global-configurations-form/global-configurations-form.component';
import { TypeUtilHelper } from 'src/app/lib/core/helpers/type-utils-helper';
import { AbstractEntityProvider } from 'src/app/lib/core/entity/abstract-entity';
import { Subject } from 'rxjs';
import { TranslationService } from 'src/app/lib/core/translator';
import { filter } from 'rxjs/operators';
import { GlobalConfigurationsListComponent } from './global-configurations-list/global-configurations-list.component';
import { backendRoutePaths } from '../../../../../partials/partials-configs';
import { environment } from '../../../../../../../../environments/environment.prod';

@Component({
  selector: 'app-global-configurations',
  templateUrl: './global-configurations.component.html',
  styles: [
    `
    .title {
      color: #000;
      font-size: .70rem;
      font-weight: 300;
      letter-spacing: normal;
    }
    .card-footer .card {
      margin-top: 0;
    }
    `
  ]
})
export class GlobalConfigurationsComponent extends AbstractAlertableComponent implements OnInit, OnDestroy {

  public ressourcesPath: string = backendRoutePaths.globalConfigurationsPath;
  public formID: number = environment.forms.globalConfigurationForm;
  // tslint:disable-next-line: no-inferrable-types
  public formTitle: string = 'Chargement en cours, veuillez patienter...';
  public selectedConfigs: AppConfigs;
  @ViewChild('appGlobalConfigurationForm', { static: true }) appGlobalConfigurationForm: GlobalConfigurationsFormComponent;
  @ViewChild('appGlobalConfigurationsList', { static: true }) appGlobalConfigurationsList: GlobalConfigurationsListComponent;
  private publishers: Subject<any>[] = [];

  constructor(
    uiStore: AppUIStoreManager,
    public readonly typeHelper: TypeUtilHelper,
    @Inject('appConfigsProvider') private entityProvider: AbstractEntityProvider<AppConfigs>,
    private translate: TranslationService
  ) { super(uiStore); }

  async ngOnInit() {
    this.publishers.push(
      ...[
        this.entityProvider.deleteRequest,
      ]
    );
    this.entityProvider.subscribe();
    const translations = await this.translate.loadTranslations();
    this.uiStoreSubscriptions.push(
      ...[
        this.entityProvider.deleteResult$.pipe(
          filter((source) => this.typeHelper.isDefined(source))
        ).subscribe((res) => {
          if (res.statusOK) {
            this.callListViewRefresh();
            this.onItemSelected(null);
          }
          this.appUIStoreManager.onActionResponse({
            res,
            okMsg: translations.successfulRequest,
            badReqMsg: `${translations.invalidRequestParams}`,
          } as ActionResponseParams);
        }, _ => this.appUIStoreManager.completeActionWithError(`${translations.serverRequestFailed}`)),

        this.entityProvider.createResult$.pipe(
          filter((form) => this.typeHelper.isDefined(form))
        ).subscribe((res) => {
          if (res instanceof AppConfigs) {
            this.callListViewRefresh();
          }
          this.appUIStoreManager.onActionResponse(
            {
              res: res instanceof AppConfigs ? true : res,
              okMsg: translations.successfulRequest,
              badReqMsg: `${translations.invalidRequestParams}`,
            } as ActionResponseParams);
        }, _ => this.appUIStoreManager.completeActionWithError(`${translations.serverRequestFailed}`)),
        this.entityProvider.updateResult$.pipe(
          filter((source) => this.typeHelper.isDefined(source))
        ).subscribe((res) => {
          if (res.statusOK) {
            this.callListViewRefresh();
          }
          this.appUIStoreManager.onActionResponse({
            res,
            okMsg: translations.successfulRequest,
            badReqMsg: `${translations.invalidRequestParams}`,
          } as ActionResponseParams);
        }, _ => this.appUIStoreManager.completeActionWithError(`${translations.serverRequestFailed}`)),
      ]);
  }

  callListViewRefresh() {
    this.appGlobalConfigurationsList.dgRefesh();
  }

  onItemSelected(event$: AppConfigs) {
    this.selectedConfigs = event$;
    this.appGlobalConfigurationForm.selected = this.selectedConfigs;
    this.appGlobalConfigurationForm.buildFormGroup();
  }

  onDeleteItem(config: AppConfigs) {
    this.entityProvider.deleteRequest.next({ req: { path: this.ressourcesPath, id: config.id } });
  }

  ngOnDestroy() {
    this.entityProvider.unsubscribe().onCompleActionListeners(this.publishers);
    this.clearUIActionSubscriptions();
    this.resetUIStore();
  }

}
