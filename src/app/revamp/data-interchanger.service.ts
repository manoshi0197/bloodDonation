import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInterchangerService {


  private citySource = new BehaviorSubject('Pune');
  currentCity = this.citySource.asObservable();

  private bloodGroupSource = new BehaviorSubject('B+');
  currentBloodGroup = this.bloodGroupSource.asObservable();

  eventsSubject: Subject<void> = new Subject<void>();
  events = this.eventsSubject.asObservable();

  constructor() { }

  changeInputData(city:string,bloodGroup:string) {
    this.citySource.next(city);
    this.bloodGroupSource.next(bloodGroup);
  }

  emitEventToChildren() {
    this.eventsSubject.next();
  }

}
