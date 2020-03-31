import { Injectable } from '@angular/core';
import { BloodBank } from './blood-bank';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<BloodBank[]>();
  private bloodBankSubject = new Subject<BloodBank>();

  isAdmin = false;
  isLoggedIn = false;

  bloodBank:BloodBank;


  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }

  getSubject(): Subject<BloodBank[]> {
    return this.subject;
  }

  getSubjectOfBloodBank(): Subject<BloodBank> {
    return this.bloodBankSubject;
  }

  //get the blood bank that is currently looged in
  getBloodBank(bloodBankName: string){
    return this.http.get<BloodBank>(this.baseUrl + '/BloodBank/getBloodBankByName/' + bloodBankName, this.userAuthCredentials);
  }

  getBloodBanks(city:string){
    return this.http.get<BloodBank[]>(this.baseUrl + '/BloodBank/getBloodBanks/' + city, this.userAuthCredentials)
  }

  addBloodBank(bloodBank: BloodBank) {
    console.log(bloodBank);
    return this.http.post<BloodBank>(this.baseUrl + '/users/RegisterBloodBank', bloodBank, this.userAuthCredentials)
  }
}
