import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { DataInterchangerService } from '../data-interchanger.service';
import { BloodBank } from '../blood-bank';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { BloodBankService } from '../blood-bank.service';

@Component({
  selector: 'app-blood-bank-list',
  templateUrl: './blood-bank-list.component.html',
  styleUrls: ['./blood-bank-list.component.css']
})
export class BloodBankListComponent implements OnInit {

  bloodBankList:BloodBank[];
  notAvailable = false;

  cityInput: string = "Pune";
  bloodGroupInput: string = "B+";

  private eventsSubscription: Subscription;

  constructor(private bloodBankService:BloodBankService, private dataInterChanger: DataInterchangerService) { }

  ngOnInit() {

    this.getBloodBanks();

    //subscribe to input values in main component
    this.dataInterChanger.currentCity.subscribe(res => this.cityInput = res);
    this.dataInterChanger.currentBloodGroup.subscribe(res => this.bloodGroupInput = res);

    //listen to events in min component (search button clicked)
    this.eventsSubscription = this.dataInterChanger.events.subscribe(() => this.getBloodBanks());

  }

  getBloodBanks(){
    try {
      this.bloodBankService.getBloodBanks(this.cityInput).subscribe((res) => this.bloodBankList = res);

      this.bloodBankService.getSubject().subscribe((data) => {
        this.bloodBankList = data;
      });

    }
    catch (e) {
      this.notAvailable = true;
    }
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
