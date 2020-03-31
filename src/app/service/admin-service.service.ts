import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<number>();
  isAdmin = false;
  isLoggedIn = false;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }

  getSubject(): Subject<number> {
    return this.subject;
  }
}
