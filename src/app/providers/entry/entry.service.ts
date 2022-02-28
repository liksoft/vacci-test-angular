import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Entry } from '../../models/entry';




@Injectable({
  providedIn: 'root'
})
export class EntryService extends Service  {


  constructor(protected client: HttpRequestService ) {

    super()
    this.model = 'entry' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.entry;
  }

}
