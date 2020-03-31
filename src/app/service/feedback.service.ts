import { Injectable } from '@angular/core';
import { experience } from '../experience/experience';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<experience[]>();
  isAdmin = false;
  isLoggedIn = false;
  availableBLood: experience[];

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  feedback : experience[]

  constructor(private http: HttpClient) { }
  getSubject(): Subject<experience[]> {
    return this.subject;
  }
  getAllFeedback():Observable <experience[]>{
    //console.log("inia")
    return this.http.get<experience[]>(this.baseUrl + '/feedback', this.userAuthCredentials)

  }

  postFeedback(feedback: experience){
    console.log(feedback);
    return this.http.post<experience>(this.baseUrl + '/addFeedback', feedback, this.userAuthCredentials)
  }
  
}
