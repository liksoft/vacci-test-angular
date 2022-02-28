import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Timespan } from '../../models/timespan';




@Injectable({
  providedIn: 'root'
})
export class TimespanService extends Service  {


  //url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;

  constructor(protected client: HttpRequestService ) {

    super()
    this.model = 'timespan' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.timespan;
  }



  // store(object: FormGroup) {

  //   console.log("jkesus object");
  //   let obj = timespan.builder().fromSerialized(object.value);
  //   const body = timespan.builder().toSerialized(obj);

  //   //console.log(this.client.post(this.url,body));
  //   return this.client.post(this.url,body);
  // }

  // storeUsingID(object: FormGroup,id:number) {

  //   console.log("jkesus object");
  //   let obj = timespan.builder().fromSerialized(object.value);
  //   const body = timespan.builder().toSerialized(obj);

  //   //console.log(this.client.post(this.url,body));
  //   return this.client.put(this.url+'/'+id,body);
  // }



  // get(parameters: string = ''):  Observable<any> {
  //   return this.client.get(this.url + parameters);
  // }

  // getOneArchiveList(): Observable<any> {
  //   return this.client.get(`${this.url}/getAllDeptArchive`);
  // }

  // desarchive(id: number): Observable<any> {
  //   return this.client.put(`${this.url}/dessarchiver/${id}`, { responseType: 'text' });
  // }
}
