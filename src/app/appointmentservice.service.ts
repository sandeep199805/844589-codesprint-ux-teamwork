import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  private baseUrl='http://localhost:3000/appointment'

  postview(appointment: Appointment):Observable<any> {
    
    return this.http.post(`${this.baseUrl}`,appointment);

  }

  getview():Observable<any>{
    //console.log("sendingggggggggg get request");
    return this.http.get(`${this.baseUrl}`);
  }

  constructor(private http : HttpClient) { }


}
