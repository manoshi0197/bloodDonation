import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { findblood } from 'src/app/carousel/findblood/findblood';
import { MyRequest } from 'src/app/my-request/myRequest';
import { UserService } from 'src/app/service/user.service';
import { BloodBankService } from '../blood-bank.service';
import { BloodBank } from '../blood-bank';
import { MyRequestService } from 'src/app/service/my-request.service';

@Component({
  selector: 'app-blood-details',
  templateUrl: './blood-details.component.html',
  styleUrls: ['./blood-details.component.css']
})
export class BloodDetailsComponent implements OnInit {

  availableBlood: findblood;
  userId:number;
  bloodBank:BloodBank;
  bloodBankName:string;
  availableBloodId:number;

  constructor(private route: ActivatedRoute, private router: Router, private bloodService: BloodAvailablityService,private userService:UserService, private bloodBankService:BloodBankService, private myRequestService:MyRequestService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bloodService.getAvailableBloodByID(+params.get('id')).subscribe((res) => {
        this.availableBlood = res;
      });
    });
    
    
    
  }

  async onRequest(){

    
    this.bloodBankName = this.availableBlood.hospitalName;
    console.log(this.bloodBankName);
    await this.bloodBankService.getBloodBank(this.availableBlood.hospitalName).toPromise().then((res) =>this.bloodBank = res);
    /* this.bloodBankService.getSubjectOfBloodBank().subscribe((data) => {
      this.bloodBank = data;
    }); */

    console.log(this.bloodBank);
    this.availableBloodId = this.availableBlood.id;
    this.userId = this.userService.user.userId;
    console.log("bloodbankid - "+this.bloodBank.bloodBankId);
    console.log("availableBloodId - "+this.availableBloodId);
    console.log("userId - "+this.availableBloodId);


    this.myRequestService.request(this.userId,this.bloodBank.bloodBankId,this.availableBloodId).subscribe((res)=>{
      console.log("requested successfully");
    });
  }

    

}
