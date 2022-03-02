import { Injectable } from '@angular/core';
import { Service } from '../service';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'src/app/lib/core/http/core';




@Injectable({
  providedIn: 'root'
})
export class EntryDetailService extends Service   {

  constructor(protected client: HttpClient ) {

    super()
    this.model = 'entrydetail' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.entrydetail;
  }


}
