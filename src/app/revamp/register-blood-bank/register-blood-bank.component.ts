import { Component, OnInit } from '@angular/core';
import { BloodBank } from '../blood-bank';
import { FormGroup, FormControl } from '@angular/forms';
import { BloodBankService } from '../blood-bank.service';
import { StateAndCitiesService } from 'src/app/service/state-and-cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-blood-bank',
  templateUrl: './register-blood-bank.component.html',
  styleUrls: ['./register-blood-bank.component.css']
})
export class RegisterBloodBankComponent implements OnInit {

  registerForm: FormGroup;
  bloodBank: BloodBank;

  registrationSuccess: boolean;
  validCredentials: boolean = true;

  States: string[];
  Cities: string[];
  bloodTypes: string[] = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];

  constructor(private router: Router, private bloodBankService: BloodBankService, private statesAndCities: StateAndCitiesService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      Username: new FormControl(),
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Age: new FormControl(),
      Gender: new FormControl(),
      Contactnumber: new FormControl(),
      Email: new FormControl(),
      Weight: new FormControl(),
      Pincode: new FormControl(),
      State: new FormControl("Maharashtra"),
      Area: new FormControl("Pune"),
      BloodGroup: new FormControl(),
      Password: new FormControl(),
      ConfirmPassword: new FormControl()
    });
    this.getStates();
  }

  onSubmit() {
    if (this.registerForm.value.Username == null || this.registerForm.value.Contactnumber == null || this.registerForm.value.Pincode == null || this.registerForm.value.Password == null || this.registerForm.value.ConfirmPassword == null || this.checkContactNumber() == false) {
      console.log("empty or contact number invalid");
      this.validCredentials = false;
    }
    else {
      if (this.registerForm.value.Password == this.registerForm.value.ConfirmPassword) {
        this.bloodBank = {
          bloodBankId: null,
          bloodBankName: this.registerForm.value.Username,
          contactNumber: this.registerForm.value.Contactnumber,
          password: this.registerForm.value.Password,
          pincode: this.registerForm.value.Pincode,
          state: this.registerForm.value.State,
          city: this.registerForm.value.Area,

        }

        this.bloodBankService.addBloodBank(this.bloodBank).subscribe((res) => { console.log("SUCCESS") });
        console.log(this.bloodBank);
        this.navigateToLogin();

      }
      else {
        console.log("password does not match");
      }
    }
  }


  getStates() {
    this.statesAndCities.getStates().subscribe((res) => this.States = res);
    this.statesAndCities.getSubject().subscribe((data) => {
      this.States = data;
    });
  }

  getCities(state: string) {
    //console.log(value);
    this.statesAndCities.getCities(state).subscribe((res) => this.Cities = res);
    this.statesAndCities.getSubject().subscribe((data) => {
      this.Cities = data;
    });
  }

  checkContactNumber() {
    if (this.registerForm.value.Contactnumber.toString().length == 10) {
      return true;
    }
    else {
      return false;
    }
  }

  navigateToLogin() {
    if (this.registrationSuccess) {
      this.router.navigate(['/login']);
    }
  }

  dismiss() {
    this.validCredentials = true;
  }

}
