import { Injectable } from '@angular/core';
import { Service } from '../service';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'src/app/lib/core/http/core';




@Injectable({
  providedIn: 'root'
})
export class UserService extends Service  {


  //url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;

  constructor(protected client: HttpClient ) {

    super()
    this.model = 'user' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.user;
  }



  // store(object: FormGroup) {

  //   console.log("jkesus object");
  //   let obj = user.builder().fromSerialized(object.value);
  //   const body = user.builder().toSerialized(obj);

  //   //console.log(this.client.post(this.url,body));
  //   return this.client.post(this.url,body);
  // }

  // storeUsingID(object: FormGroup,id:number) {

  //   console.log("jkesus object");
  //   let obj = user.builder().fromSerialized(object.value);
  //   const body = user.builder().toSerialized(obj);

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
