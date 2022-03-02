import { Injectable } from '@angular/core';
import { Service } from '../service';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'src/app/lib/core/http/core';




@Injectable({
  providedIn: 'root'
})
export class EntryService extends Service  {


  constructor(protected client: HttpClient ) {

    super()
    this.model = 'entry' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.entry;
  }

}
