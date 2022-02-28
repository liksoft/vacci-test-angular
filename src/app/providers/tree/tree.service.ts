import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Tree } from '../../models/tree';




@Injectable({
  providedIn: 'root'
})
export class TreeService extends Service  {


  //url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;

  constructor(protected client: HttpRequestService ) {

    super()
    this.model = 'tree' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.tree;
  }


}
