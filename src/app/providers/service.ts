import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";
import { ServiceInterface } from "./service.interface";
import * as moment from "moment";
import { HttpClient } from "../lib/core/http/core";

export abstract class Service implements ServiceInterface {
  protected url: string;
  protected client: HttpClient;
  protected model: string;

  constructor() {}

  injection(object: object) {
    return object;
  }

  getBody = async (str: string, object) => {
    const ns = await import("../models/" + str);
    console.log(ns);
    let class_name = ns[str[0].toUpperCase() + str.substring(1)];

    let objval = this.injection(object.value);
    let obj = class_name.builder().fromSerialized(objval);

    for (let [k, v] of Object.entries(obj)) {
      if (
        obj.hasOwnProperty("dateList") &&
        Object.values(obj.dateList).indexOf(k) != -1
      ) {
        obj[k] = moment(v, "DD-MM-YYYY").format("YYYY-MM-DD");
      }
    }

    console.log(obj);
    return await class_name.builder().toSerialized(obj);
  };

  store(object: FormGroup) {
    return (async () => {
      const body = await this.getBody(this.model, object);
      console.log("store");
      console.log(body);
      return this.client.post(this.url, body);
    })();
  }

  storeUsingID(object: FormGroup, id: number) {
    return (async () => {
      const body = await this.getBody(this.model, object);
      return this.client.put(this.url + "/" + id, body);
    })();
  }

  get(parameters: string = ""): Observable<any> {
    return this.client.get(this.url + "?" + parameters);
  }

  getOne(id: number, parameters: string = ""): Observable<any> {
    return this.client.get(this.url + "/" + id + "?" + parameters);
  }

  getOneArchiveList(): Observable<any> {
    return this.client.get(`${this.url}/getAllDeptArchive`);
  }

  desarchive(id: number): Observable<any> {
    return this.client.put(`${this.url}/dessarchiver/${id}`, {
      responseType: "text",
    });
  }
}
