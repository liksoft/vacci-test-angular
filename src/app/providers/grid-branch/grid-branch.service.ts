import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { GridBranch } from '../../models/grid-branch';




@Injectable({
  providedIn: 'root'
})
export class GridbranchService  extends Service  {



  constructor(protected client: HttpRequestService) {
    super()
    this.model = 'gridbranch' ;
    this.url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;
  // this.url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;

  }

}
