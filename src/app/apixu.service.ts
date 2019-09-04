import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
    getWeather(location){
   return this.http.get(
       'https://api.apixu.com/v1/current.json?key=82905d951f844a63ab6163410190309&q=' + location
   );
   }

}
