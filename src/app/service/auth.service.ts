import { Injectable } from '@angular/core';
import { user } from '../site/login/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BloodBankService } from '../revamp/blood-bank.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: user;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  public userId:number = 2;

  constructor(private userService: UserService, public router: Router, private http: HttpClient, private bloodBankService:BloodBankService) { }

  baseUrl = environment.baseUrl;
  private authenticationApiUrl = this.baseUrl + '/authenticate';
  private token: string;

  authenticate(user: string, password: string): Observable<any> {
    console.log(this.loggedInUser);
    let credentials = btoa(user + ':' + password)
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.http.get(this.authenticationApiUrl, { headers })
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  logout() {
    this.loggedInUser = null;
    this.userService.isAdmin = false;    
    this.userService.isHospital = false;
    this.loggedIn = false;
    this.userService.isLoggedIn = false;
    this.userService.user = null;
    this.bloodBankService.bloodBank = null;
    this.router.navigate(['login']);
  }



}
