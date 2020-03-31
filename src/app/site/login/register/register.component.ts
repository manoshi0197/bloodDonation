import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { user } from '../user';
import { UserService } from 'src/app/service/user.service';
import { StateAndCitiesService } from 'src/app/service/state-and-cities.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: user;
  registrationSuccess: boolean;
  validCredentials:boolean = true;

  States: string[];
  Cities: string[];
  bloodTypes: string[] = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private statesAndCities: StateAndCitiesService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      Username: new FormControl(),
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Age: new FormControl(),
      Gender: new FormControl("Male"),
      Contactnumber: new FormControl(),
      Email: new FormControl(),
      Weight: new FormControl(),
      Pincode: new FormControl(),
      State: new FormControl("Maharashtra"),
      Area: new FormControl("Pune"),
      BloodGroup: new FormControl("O+"),
      Password: new FormControl(),
      ConfirmPassword: new FormControl()
    });
    this.getStates();
    this.getCities("Maharashtra");
  }
  onSubmit() {
    if (this.registerForm.value.Username == null || this.registerForm.value.FirstName == null || this.registerForm.value.LastName == null || this.registerForm.value.Age == null || this.registerForm.value.Contactnumber == null || this.registerForm.value.Weight == null || this.registerForm.value.Pincode == null || this.registerForm.value.Email == null || this.registerForm.value.Password == null || this.registerForm.value.ConfirmPassword == null || this.checkContactNumber()==false) {
      console.log("empty or contact number invalid");
      this.validCredentials = false;
    }
    else {
      if (this.registerForm.value.Password == this.registerForm.value.ConfirmPassword) {
        this.user = {
          userId: null,
          userName: this.registerForm.value.Username,
          firstName: this.registerForm.value.FirstName,
          lastName: this.registerForm.value.LastName,
          age: this.registerForm.value.Age,
          gender: this.registerForm.value.Gender,
          contactNumber: this.registerForm.value.Contactnumber,
          email: this.registerForm.value.Email,
          password: this.registerForm.value.Password,
          weight: this.registerForm.value.Weight,
          pincode: this.registerForm.value.Pincode,
          state: this.registerForm.value.State,
          area: this.registerForm.value.Area,
          bloodGroup: this.registerForm.value.BloodGroup,
          donor: false

        }

        this.userService.addUser(this.user).subscribe((res) => { console.log("SUCCESS"); this.registrationSuccess = true });
        console.log(this.user);
        this.navigateToLogin();

      }
      else {
        console.log("password doesnot matched");
      }
    }
  }

  checkContactNumber(){
   if(this.registerForm.value.Contactnumber.toString().length == 10){
     return true;
   }
   else{
     return false;
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

  navigateToLogin() {
    if (this.registrationSuccess) {
      this.router.navigate(['/login']);
    }
  }

  dismiss(){
    this.validCredentials = true;
  }

}
