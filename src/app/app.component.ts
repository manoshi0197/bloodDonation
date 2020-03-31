import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { BloodBankService } from './revamp/blood-bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'blood-donation';
  public name: string;

  constructor(private authService: AuthService, private userService: UserService, private bloodBankService:BloodBankService) { }

  loggedIn() {
    if (this.authService.loggedIn) {
      this.name = this.authService.name;
      return true;
    }
    else {
      return false;
    }
  }

  isAdmin(){
    if(this.userService.isAdmin){
      return true;
    }
    else{
      false;
    }
  }

  isHospital(){
    if(this.userService.isHospital){
      return true;
    }
    else{
      false;
    }
  }

  logout() {
    this.authService.logout();
  }


}
