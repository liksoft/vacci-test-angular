import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Articlename } from '../../models/articlename';




@Injectable({
  providedIn: 'root'
})
export class ArticleNameService extends Service   {

  constructor(protected client: HttpRequestService ) {

    super()
    this.model = 'articlename' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.article_name;
  }


}
