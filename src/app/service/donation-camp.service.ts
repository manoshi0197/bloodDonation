import { Injectable } from '@angular/core';
import { DonationCamp } from '../revamp/donation-camp-list/donation-camp';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationCampService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<DonationCamp[]>();
  isAdmin = false;
  isLoggedIn = false;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };


  constructor(private http: HttpClient) { }

  getSubject(): Subject<DonationCamp[]> {
    return this.subject;
  }

  getUpcomingDonationCampList(){
    return this.http.get<DonationCamp[]>(this.baseUrl + "/donation-camp/upcoming", this.userAuthCredentials);
  }

  getDonationCampById(id:number){
    return this.http.get<DonationCamp>(this.baseUrl + "/donation-camp/by-id/"+ id, this.userAuthCredentials);
  }

  addDonationCamp(donationCamp: DonationCamp){
    return this.http.post<DonationCamp>(this.baseUrl + "/donation-camp", donationCamp, this.userAuthCredentials);
  }

  registerForDonationCamp(donorId: number, campId:number){
    return this.http.get<DonationCamp>(this.baseUrl + "/donation-camp/register/"+ donorId + "/" + campId, this.userAuthCredentials);
  }
  
  dummy(id:number){

  }
}
