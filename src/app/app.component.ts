import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Location } from '@angular/common';
import 'moment/locale/fr';
import 'moment/locale/en-gb';
import * as lodash from 'lodash';
import { doLog } from './lib/core/rxjs/operators';
import { AppUIStateProvider } from './lib/core/ui-state';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'VacciTest';
  showComponentLoadingDirective = true;

  uiState$ = this.uiState.uiState.pipe(
    doLog('Application Global UI State: ')
  );

  constructor(
    private translate: TranslateService,
    private router: Router,
    private location: Location,
    private uiState: AppUIStateProvider
  ) {
    this.translate.addLangs(['en', 'fr']);
    const browserLang = this.translate.getBrowserLang();
    // Log(browserLang);
    this.translate.setDefaultLang(browserLang);
    // Insure that translation use the user browser language
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // Set moment locale
    moment.locale(browserLang);
  }

  ngAfterViewInit() {}

  onIsAuthenticated(value: boolean) {
    setTimeout(() => {
      const currentPath = this.location.path();
      if (value && lodash.isEmpty(currentPath)) {
        //this.router.navigateByUrl('/dashboard');
        return;
      }
    }, 0);
    this.showComponentLoadingDirective = false;
  }

  onEndActionEvent({status, message}: {status: number, message: string}) {
    this.uiState.endAction(message, status);
  }
}
