import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationCampService } from 'src/app/service/donation-camp.service';
import { DonationCamp } from '../donation-camp-list/donation-camp';
import { user } from 'src/app/site/login/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-donation-camp-detail',
  templateUrl: './donation-camp-detail.component.html',
  styleUrls: ['./donation-camp-detail.component.css']
})
export class DonationCampDetailComponent implements OnInit {

  donationCamp:DonationCamp;
  user:user;

  registered:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private donationCampService:DonationCampService, private userService:UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.donationCampService.getDonationCampById(+params.get('id')).subscribe((res) => {
        this.donationCamp = res;
      });
    });

    this.user = this.userService.user;
    console.log(this.user);
  }

  onRegister(){
    //console.log(this.donationCamp);
    console.log(this.user.userId+" -- "+this.donationCamp.id);
    this.donationCampService.registerForDonationCamp(this.user.userId,this.donationCamp.id).subscribe((res) =>{
      console.log("succesfully registered");
    });
    this.registered = true;
  }

}
