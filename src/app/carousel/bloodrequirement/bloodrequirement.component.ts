import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { bloodrequirement } from './bloorequirement';
import { BloodRequestService } from 'src/app/service/blood-request.service';
import { user } from 'src/app/site/login/user';

@Component({
  selector: 'app-bloodrequirement',
  templateUrl: './bloodrequirement.component.html',
  styleUrls: ['./bloodrequirement.component.css']
})
export class BloodrequirementComponent implements OnInit {
  bloodrequirementForm: FormGroup;
  requiredBlood: bloodrequirement[];
  Requestor:user;


  constructor(private blood: BloodRequestService) { }

  ngOnInit() {
    this.bloodrequirementForm = new FormGroup({
      State: new FormControl(),
      Area: new FormControl(),
      Pincode: new FormControl(),
      BloodGroup: new FormControl()
    });


  }
  onclick() {
    this.requiredBlood = this.blood.getRequiredBlood();

     this.blood.getBLoodRequestForParticularLocation(this.bloodrequirementForm.value.State,
                                                    this.bloodrequirementForm.value.Area,
                                                    this.bloodrequirementForm.value.Pincode,
                                                    this.bloodrequirementForm.value.BloodGroup).subscribe((res) => this.requiredBlood = res);
                                                    this.blood.getSubject().subscribe((data) => {
                                                    this.requiredBlood = data;  
      });
 
  }







}
