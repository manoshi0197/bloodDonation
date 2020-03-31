import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { SlotService } from 'src/app/service/slot.service';
import { UserService } from 'src/app/service/user.service';
import { MyRequestService } from 'src/app/service/my-request.service';
import { BloodRequestService } from 'src/app/service/blood-request.service';
import { BloodBankService } from 'src/app/revamp/blood-bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";



  submitted = false;

  validCredentials = true;
  successLogin = false;


  constructor(private router: Router, private userService: UserService, private myRequestService: MyRequestService, private bloodAvailabilityService: BloodAvailablityService, private slotService: SlotService, private authService: AuthService, private authenticationService: AuthenticationService, private requestService: BloodRequestService, private bloodBankService: BloodBankService) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.username + " " + this.password);
    this.submitted = true;

    //console.log(this.loginForm.value)

    await this.authService.authenticate(this.username, this.password).toPromise().then((res) => {
      this.successLogin = true;
      this.authService.setToken(res.token);
      this.userService.isAdmin = false;
      this.authService.loggedIn = true;
      this.userService.isLoggedIn = true;
      this.authService.name = this.username;
      this.setUser(this.username);
      if (res.role === 'ROLE_ADMIN') {
        this.userService.isAdmin = true;
        this.userService.isHospital = false;
        this.router.navigate(['/admin-dashboard']);
      }
      else if (res.role === 'ROLE_HOSPITAL') {
        this.userService.isHospital = true;
        this.userService.isAdmin = false;
        this.setBloodBank(this.username);
        this.router.navigate(['/loading-page']);
      }
      else {
        console.log("user is log");
        this.userService.isAdmin = false;
        this.router.navigate(['/home']);
      }

      //this.router.navigateByUrl('');
      this.validCredentials = true;
      //this.router.navigate(['']);
    }, () => { this.successLogin = false; this.validCredentials = false; }
    );



  }

  setUser(username: string) {
    this.userService.getUser(username).subscribe((res) => {
      this.userService.user = res;
      console.log("1rd");
      console.log(this.userService.user);
      console.log(this.userService.user.donor);
    });
  }

  setBloodBank(bloodBankName: string) {
    this.bloodBankService.getBloodBank(bloodBankName).subscribe((res) => {
      this.bloodBankService.bloodBank = res;
      console.log("2rd");
      console.log(this.bloodBankService.bloodBank);
    });
  }

  dismiss(){
    this.validCredentials = true;
  }

}
