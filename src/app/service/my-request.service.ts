import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';
import { MyRequest } from '../my-request/myRequest';

@Injectable({
  providedIn: 'root'
})
export class MyRequestService {
 
  baseUrl = environment.baseUrl;
  private subject = new Subject<MyRequest[]>();

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  myRequest : MyRequest[];

  constructor(private http: HttpClient) { }
  getSubject(): Subject<MyRequest[]> {
    return this.subject;
  }
  getMyRequests(userId: number):Observable <MyRequest[]>{
    return this.http.get<MyRequest[]>(this.baseUrl + '/myRequests/' + userId, this.userAuthCredentials);
  }
  getHospitalRequest(bloodBankId:number):Observable <MyRequest[]>{
    return this.http.get<MyRequest[]>(this.baseUrl + '/myRequests/bloodBankRequest/' + bloodBankId,this.userAuthCredentials);
  }
  accept(id:number){
    return this.http.get<number>(this.baseUrl + '/myRequests/accept/'+ id,this.userAuthCredentials);
  }
  reject(id:number){
    return this.http.get<number>(this.baseUrl + '/myRequests/reject/'+ id,this.userAuthCredentials);
  }

  request(userId:number,bloodBankId:number,availableBloodId:number){
    return this.http.get<number>(this.baseUrl + '/myRequests/requestBlood/'+userId+'/'+bloodBankId+'/'+availableBloodId,this.userAuthCredentials);
  }
}
