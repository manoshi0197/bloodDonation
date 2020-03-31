import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateAndCitiesService {
 
  baseUrl = environment.baseUrl;
  private subject = new Subject<string[]>();

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }

  getSubject(): Subject<string[]> {
    return this.subject;
  }

  getStates(){
    return this.http.get<string[]>(this.baseUrl + '/StatesAndCities/getStates',this.userAuthCredentials);
  }

  getCities(state:string){
    return this.http.get<string[]>(this.baseUrl + '/StatesAndCities/getCities/' + state,this.userAuthCredentials);
  }

}
