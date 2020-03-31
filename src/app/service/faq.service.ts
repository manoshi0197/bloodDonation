import { Injectable } from '@angular/core';
import { faq } from '../faq/faq';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<faq[]>();
  faq: faq[];

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }
  getSubject(): Subject<faq[]> {
    return this.subject;
  }

  postQuestion(faq: faq){
    console.log(faq);
    return this.http.post<faq>(this.baseUrl + '/postQuestion', faq, this.userAuthCredentials)
  }

  getUnAnsweredQuestion(){
    return this.http.get<faq[]>(this.baseUrl + '/unAnswered', this.userAuthCredentials);
  }
  
  getAnsweredQuestion(){
    return this.http.get<faq[]>(this.baseUrl + '/answered', this.userAuthCredentials);
  }

  answerQuestion(faq:faq){
    return this.http.post<faq>(this.baseUrl + '/answerQuestion', faq, this.userAuthCredentials);
  }
}
