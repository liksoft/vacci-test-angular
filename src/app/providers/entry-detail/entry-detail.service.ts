import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Entrydetail } from '../../models/entrydetail';




@Injectable({
  providedIn: 'root'
})
export class EntryDetailService extends Service   {

  constructor(protected client: HttpRequestService ) {

    super()
    this.model = 'entrydetail' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.entrydetail;
  }


}
