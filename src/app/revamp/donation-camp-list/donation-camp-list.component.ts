import { Component, OnInit } from '@angular/core';
import { DonationCamp } from './donation-camp';
import { DonationCampService } from 'src/app/service/donation-camp.service';

@Component({
  selector: 'app-donation-camp-list',
  templateUrl: './donation-camp-list.component.html',
  styleUrls: ['./donation-camp-list.component.css']
})
export class DonationCampListComponent implements OnInit {

  notAvailable = false;
  donationCampList: DonationCamp[];

  constructor(private donationCampService:DonationCampService)
  {

  }

  ngOnInit() {
    this.getUpcomingDonationCampList();
  }

  getUpcomingDonationCampList(){
    this.donationCampService.getUpcomingDonationCampList().subscribe((res) =>{
      this.donationCampList = res
    });
  }

}
