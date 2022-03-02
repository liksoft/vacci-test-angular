import { Injectable } from "@angular/core";
import { Service } from "../service";
import { environment } from "src/environments/environment";
import { HttpClient } from "src/app/lib/core/http/core";

@Injectable({
  providedIn: "root",
})
export class ArticleService extends Service {
  //url = environment.APP_FILE_SERVER_URL_v2+environment.toApi_v2?.gridbranchs;

  constructor(protected client: HttpClient) {
    super();
    this.model = "article";
    this.url = environment.APP_FILE_SERVER_URL + environment.toApi?.article;
  }
}
