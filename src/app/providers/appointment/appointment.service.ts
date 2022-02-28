import { Injectable } from '@angular/core';
import { Service } from '../service';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { environment } from 'src/environments/environment';
import { Appointment } from '../../models/appointment';




@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Service  {



  constructor(protected client: HttpRequestService) {
    super()
    this.model = 'appointment' ;
    this.url = environment.APP_FILE_SERVER_URL+environment.toApi?.appointment;

  }

}
