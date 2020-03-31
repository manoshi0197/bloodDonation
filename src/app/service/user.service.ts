import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { user } from '../site/login/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<user>();
  private subjectOfUsers = new Subject<user[]>();
  isAdmin: boolean = false;
  isHospital:boolean = false;
  isLoggedIn = false;
  public user:user = {
    userId:undefined,
    userName:undefined,
    firstName:undefined,
    lastName:undefined,
    age:undefined,
    gender:undefined,
    contactNumber:undefined,
    email:undefined,
    password:undefined,
    weight:undefined,
    state:undefined,
    area:undefined,
    pincode:undefined,
    bloodGroup:undefined,
    donor:undefined
  };

  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:pwd')
    })
  };

  constructor(private http: HttpClient) { }
  getSubject(): Subject<user> {
    return this.subject;
  }

  getSubjectOfUsers(): Subject<user[]> {
    return this.subjectOfUsers;
  }

  // from api
  getUser(userName: string): Observable<user> {
    return this.http.get<user>(this.baseUrl + '/users/' + userName, this.authCredentials);
  }

  getUsers() {
    this.http.get(this.baseUrl + '/users/', this.authCredentials).subscribe((res) => console.log(res));
  }
  addUser(user: user) {
    console.log(user);
    return this.http.post<user>(this.baseUrl + '/users', user, this.authCredentials)
  }

  registerAsDonor(){
    console.log(this.user.userId);
    return this.http.get<user>(this.baseUrl + '/users/registerAsDonor/' + this.user.userId, this.authCredentials);
  }

  getNumberOfDonors(){
    return this.http.get<number>(this.baseUrl + '/users/getCountOfDonors', this.authCredentials);
  }

  getDonors(city:string,bloodGroup:string){
    return this.http.get<user[]>(this.baseUrl + '/users/getDonors/'+city+'/'+bloodGroup , this.authCredentials);
  }


  ///// from user to others
  getUserFromService():user{
    return this.user
  }
}
