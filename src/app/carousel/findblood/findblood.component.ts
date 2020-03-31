import { Component, OnInit } from '@angular/core';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { findblood } from './findblood';
import { environment } from 'src/environments/environment.prod';
import { Subject, BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { StateAndCitiesService } from 'src/app/service/state-and-cities.service';
import { DataInterchangerService } from 'src/app/revamp/data-interchanger.service';

@Component({
  selector: 'app-findblood',
  templateUrl: './findblood.component.html',
  styleUrls: ['./findblood.component.css']
})
export class FindbloodComponent implements OnInit { 

  States:string[];
  Cities:string[];
  bloodTypes:string[] = ["O+","A+","B+","AB+","O-","A-","B-","AB-"];
  mainHeaderTitle: string = "Stock Availabilty";
  disableBloodTypeField: boolean = false;

  availableBloodForm: FormGroup;
  availableBlood : findblood[];
  state:string = "Maharashtra";
  area:string = "Pune";
  bloodGroup:string;
  notAvailable =false;
  constructor(private blood : BloodAvailablityService, private statesAndCities: StateAndCitiesService, private dataInterChanger:DataInterchangerService) { }

  ngOnInit() {
    this.availableBloodForm = new FormGroup({
      State: new FormControl(),
      Area: new FormControl(),
      BloodGroup: new FormControl()
    });
    this.getStates();
  }
  onClick()
  {
    this.notAvailable = false;
    this.state = this.availableBloodForm.value.State;
    this.area = this.availableBloodForm.value.Area;
    this.bloodGroup = this.availableBloodForm.value.BloodGroup;

    console.log(this.state+" - "+this.area+" - "+this.bloodGroup);

    //next function
    this.dataInterChanger.changeInputData(this.area,this.bloodGroup);

    //notify children that search button has been clicked
    this.dataInterChanger.emitEventToChildren();
  }

  
  getStates(){
    this.statesAndCities.getStates().subscribe((res) => this.States = res);
    this.statesAndCities.getSubject().subscribe((data) => {
      this.States = data;
    });
  }

  getCities(state:string){
    //console.log(value);
    this.statesAndCities.getCities(state).subscribe((res) => this.Cities = res);
    this.statesAndCities.getSubject().subscribe((data) => {
      this.Cities = data;
    });
  }

  // these are functions for secondary navbar click which changes courosel
  onBloodSelection(){
    this.mainHeaderTitle = "Stock Availabilty";
    this.disableBloodTypeField = false;
  }
  onDonorsSelection(){
    this.mainHeaderTitle = "Search For Donor";
    this.disableBloodTypeField = false;
  }
  onBloodBankSelection(){
    this.mainHeaderTitle = "Blood Banks Nearby";
    this.disableBloodTypeField = true;
  }
  onDonationCampSelection(){
    this.mainHeaderTitle = "Upcoming Donation Camps";
    this.disableBloodTypeField = true;
  }


}
