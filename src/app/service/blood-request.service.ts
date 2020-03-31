import { Injectable } from '@angular/core';
import { bloodrequirement } from '../carousel/bloodrequirement/bloorequirement';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<bloodrequirement[]>();
  isAdmin = false;
  isLoggedIn = false;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  requiredBlood: bloodrequirement[]

  constructor(private http: HttpClient) { }

  getSubject(): Subject<bloodrequirement[]> {
    return this.subject;
  }
  getRequiredBlood(): bloodrequirement[] {
    return this.requiredBlood;
  }
  getBLoodRequestForParticularLocation(state: string, area: string, pincode: number, bloodGroup: string) {
    return this.http.get<bloodrequirement[]>(this.baseUrl + '/bloodRequirement/' + state + '/' + area + '/' + pincode + '/' + bloodGroup, this.userAuthCredentials);
  }
  getTodaysRequest(){
    return this.http.get<number>(this.baseUrl + '/bloodRequirement/getTodaysRequest',this.userAuthCredentials);
  }
}


