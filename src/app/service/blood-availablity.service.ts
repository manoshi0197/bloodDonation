import { Injectable } from '@angular/core';
import { findblood } from '../carousel/findblood/findblood';
import { environment } from 'src/environments/environment.prod';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodAvailablityService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<findblood[]>();
  isAdmin = false;
  isLoggedIn = false;
  availableBLood: findblood[];


  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }

  //
  requestBlood(id:number){
    console.log("request success" + id);
  }

  //get available blood based on city and blood group
  getAvailableBlood(bloodGroup : string, city : string):Observable<findblood[]>{
    //return this.availableBLood;
    return this.http.get<findblood[]>(this.baseUrl + '/availableblood/' + bloodGroup + "/" + city, this.userAuthCredentials)
  }

  getAvailableBloodByID(bloodId:number){
    return this.http.get<findblood>(this.baseUrl + '/availableblood/' + bloodId , this.userAuthCredentials);
  }

  //admin's function
  getAvailableUnitsForAdmin(bloodGroup:string){
    return this.http.get<number>(this.baseUrl + '/availableblood/forAdmin/'+bloodGroup,this.userAuthCredentials);
  }

  //hospital's function
  getAvailableUnitsForHospital(bloodGroup:string,bloodBankName:string){
    return this.http.get<number>(this.baseUrl + '/availableblood/forHospital/'+bloodGroup+'/'+bloodBankName,this.userAuthCredentials);
  }

  updateAvailableBloodStock(availableBloodId:number){
    return this.http.get<number>(this.baseUrl + '/availableblood/decreament/'+availableBloodId,this.userAuthCredentials);
  }

  updateUnitsByHospital(type:string,unit:number,bloodBankName:string){
    return this.http.get<number>(this.baseUrl + '/availableblood/updateUnitsByHospital/'+type+'/'+unit+'/'+bloodBankName,this.userAuthCredentials);
  }

  getSubject(): Subject<findblood[]> {
    return this.subject;
  }

}
