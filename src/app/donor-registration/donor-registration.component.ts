import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { user } from '../site/login/user';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {

  user:user;
  isAlreadyDonor:boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isAlreadyDonor = this.userService.user.donor;
    console.log('USER:'+this.userService.user.userName);    
    console.log('USER:'+this.userService.user.donor);    
  }

  onClick(){
    this.userService.registerAsDonor().subscribe( (res)=> console.log("successfully registered as donor"));
    
  }

}
