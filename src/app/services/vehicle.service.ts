import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  API_URL: string = 'https://apptractoback.azurewebsites.net/api/registrosVehicular/GetRegistroScan';
  constructor(private httpClient: HttpClient){}

  getVehicles(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }
}
