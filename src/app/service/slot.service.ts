import { Injectable } from '@angular/core';
import { slot } from '../slot/slot';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<slot[]>();
  isAdmin = false;
  isLoggedIn = false;
  availableBLood: slot;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }

  getSubject(): Subject<slot[]> {
    return this.subject;
  }

  checkSlotAvailability(slot:slot){
    return this.http.put<number>(this.baseUrl + '/checkSlot',slot,this.userAuthCredentials);
  }

  bookSlot(slot:slot){
    return this.http.post<slot>(this.baseUrl + '/slotBooking', slot, this.userAuthCredentials);
  }

  
}
