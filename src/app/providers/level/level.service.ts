import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Level } from '../../models/level';




@Injectable({
  providedIn: 'root'
})
export class LevelService  extends Service  {



  constructor(protected client: HttpRequestService) {
    super()
    this.model = 'level' ;
    // this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.level;
  this.url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.levels;

  }

  // store(object: FormGroup) {

  //   console.log("jkesus object");
  //   let obj = level.builder().fromSerialized(object.value);
  //   const body = level.builder().toSerialized(obj);

  //   //console.log(this.client.post(this.url,body));
  //   return this.client.post(this.url,body);
  // }

  // storeUsingID(object: FormGroup,id:number) {

  //   console.log("jkesus object");
  //   let obj = level.builder().fromSerialized(object.value);
  //   const body = level.builder().toSerialized(obj);

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
