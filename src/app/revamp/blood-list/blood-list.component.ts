import { Component, OnInit } from '@angular/core';
import { findblood } from 'src/app/carousel/findblood/findblood';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { DataInterchangerService } from '../data-interchanger.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blood-list',
  templateUrl: './blood-list.component.html',
  styleUrls: ['./blood-list.component.css']
})
export class BloodListComponent implements OnInit {

  availableBlood: findblood[];
  notAvailable = false;

  cityInput: string = "Pune";
  bloodGroupInput: string = "B+";

  private eventsSubscription: Subscription;

  constructor(private blood: BloodAvailablityService, private dataInterChanger: DataInterchangerService) { }

  ngOnInit() {
    this.getAvailableBlood();

    //subscribe to input values in main component
    this.dataInterChanger.currentCity.subscribe(res => this.cityInput = res);
    this.dataInterChanger.currentBloodGroup.subscribe(res => this.bloodGroupInput = res);

    //listen to events in min component (search button clicked)
    this.eventsSubscription = this.dataInterChanger.events.subscribe(() => this.getAvailableBlood());
  }

  getInputs() {
    this.dataInterChanger.currentCity.subscribe(res => this.cityInput = res);
    this.dataInterChanger.currentBloodGroup.subscribe(res => this.bloodGroupInput = res);
  }

  getAvailableBlood() {
    try {
      this.blood.getAvailableBlood(this.bloodGroupInput, this.cityInput).subscribe((res) => this.availableBlood = res);

      this.blood.getSubject().subscribe((data) => {
        this.availableBlood = data;
      });

    }
    catch (e) {
      this.notAvailable = true;
    }

  }   

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  /* test function of data interchanger
  testf(){
    console.log(this.cityInput);
    console.log(this.bloodGroupInput);
  } 
  */

}
