import { Injectable } from "@angular/core";
import { Service } from "../service";
import { environment } from "src/environments/environment";
import { ProfilAllocation } from "../../models/profil-allocation";
import { HttpClient } from "src/app/lib/core/http/core";

@Injectable({
  providedIn: "root",
})
export class UserProfilService extends Service {
  constructor(protected client: HttpClient) {
    super();
    this.model = "profil";
    this.url = environment.APP_FILE_SERVER_URL + environment.toApi?.profil;
  }

  injection(object) {
    console.log("UserProfilService");
    if (typeof object.permission_id != "undefined") {
      let alloc: Array<any> = [];
      for (const k of Object.keys(object.permission_id)) {
        alloc[k] = {
          permission_id: Object.values(object.permission_id)[k],
          c: 25,
          u: 12,
          r: 11,
          d: 44,
        } as ProfilAllocation;
      }
      object.allocations = alloc;
    }

    return object;
  }
}
