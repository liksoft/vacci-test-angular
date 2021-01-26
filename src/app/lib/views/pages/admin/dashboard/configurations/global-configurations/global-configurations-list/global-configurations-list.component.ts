import { Component, OnInit, Input, Output, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { ClrDatagridStateInterface, ClrDatagrid } from '@clr/angular';
import { AppConfigs } from 'src/app/lib/bloc/models/app-configs';
import { ISource, ISourceRequestQueryParameters } from 'src/app/lib/core/components/ng-data-table/ng-data-table.component';
import { GenericPaginatorDatasource } from 'src/app/lib/core/helpers/paginator';
import { AppUIStoreManager } from 'src/app/lib/core/helpers/app-ui-store-manager.service';
import { AbstractAlertableComponent } from 'src/app/lib/core/helpers/component-interfaces';
import { debounceTime, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { ISerializableBuilder } from 'src/app/lib/core/built-value/contracts/serializers';
import { TranslationService } from 'src/app/lib/core/translator';
import { Dialog } from 'src/app/lib/core/utils';

@Component({
  selector: 'app-global-configurations-list',
  templateUrl: './global-configurations-list.component.html',
  styles: []
})
export class GlobalConfigurationsListComponent extends AbstractAlertableComponent implements OnInit, OnDestroy {

  @Input() ressourcesPath: string;
  @Input() ressourcesJsonKey: string;
  public currentGridState: ClrDatagridStateInterface;
  @ViewChild('clrDataGrid', { static: true }) dataGrid: ClrDatagrid;
  public source: ISource<AppConfigs>;
  @Output() selectedItem = new EventEmitter<AppConfigs>();
  @Output() deleteItem = new EventEmitter<AppConfigs>();

  constructor(
    uiStore: AppUIStoreManager,
    @Inject('appConfigsDataSource') private dataSource: GenericPaginatorDatasource<AppConfigs>,
    private dialog: Dialog,
    private translate: TranslationService
  ) {
    super(uiStore);
  }

  ngOnInit() {
    this.subscribeToUIActions();
    this.appUIStoreManager.initializeUIStoreAction();
    // Subscribe to refresh and of the datagrid and debounce reload for 1 seconds
    this.uiStoreSubscriptions.push(this.dataGrid.refresh.asObservable().pipe(
      debounceTime(500),
      // distinctUntilChanged(),
      switchMap((state) => from(this.refresh(state))),
    ).subscribe(async (state) => {
      try {
        this.source = await (this.dataSource)
          .resetScope()
          .setResponseJsonKey(this.ressourcesJsonKey)
          .setRessourcePath(this.ressourcesPath)
          .setBuider(AppConfigs.builder() as ISerializableBuilder<AppConfigs>)
          .setQueryParameters(Object.assign(state.filters))
          .getItems(state.params);
        this.appUIStoreManager.completeUIStoreAction();
      } catch (error) {
        this.appUIStoreManager.completeUIStoreAction();
      }
    }));
  }

  onSelectedItem(item: AppConfigs) {
    this.selectedItem.emit(item);
  }

  /**
   * @description Handler for the ClrDataGrid refresh event
   * @param state [[ClrDatagridStateInterface]]
   */
  public async refresh(state: ClrDatagridStateInterface) {
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    this.currentGridState = state;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    const filters: { [prop: string]: any[] } = {};
    let params: ISourceRequestQueryParameters = {} as ISourceRequestQueryParameters;
    if (state.filters) {
      for (const filter of state.filters) {
        const { property, value } = filter as { property: string, value: string };
        filters[property] = [value];
      }
    }
    if (state.page) {
      params = {
        page: state.page.current,
        perPage: state.page.size
      };
    }
    return { filters, params };
  }

  async onDeleteItem(config: AppConfigs) {
    const translations = await this.translate.loadTranslations(['prompt']);
    if (this.dialog.confirm(translations.prompt)) {
      this.deleteItem.emit(config);
    }
  }

  dgRefesh() {
    this.dataGrid.refresh.emit(this.currentGridState);
  }

  ngOnDestroy() {
    this.resetUIStore();
  }
}
