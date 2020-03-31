import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/site/login/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { DataInterchangerService } from '../data-interchanger.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {

  donorsList: user[];
  notAvailable = false;

  cityInput: string = "Pune";
  bloodGroupInput: string = "B+";

  private eventsSubscription: Subscription;

  constructor(private userService:UserService, private dataInterChanger: DataInterchangerService) { }

  ngOnInit() {

    this.getDonors();

    //subscribe to input values in main component
    this.dataInterChanger.currentCity.subscribe(res => this.cityInput = res);
    this.dataInterChanger.currentBloodGroup.subscribe(res => this.bloodGroupInput = res);

    //listen to events in min component (search button clicked)
    this.eventsSubscription = this.dataInterChanger.events.subscribe(() => this.getDonors());

  }

  getInputs() {
    this.dataInterChanger.currentCity.subscribe(res => this.cityInput = res);
    this.dataInterChanger.currentBloodGroup.subscribe(res => this.bloodGroupInput = res);
  }

  getDonors() {
    try {
      this.userService.getDonors(this.cityInput,this.bloodGroupInput).subscribe((res) => this.donorsList = res);

      this.userService.getSubjectOfUsers().subscribe((data) => {
        this.donorsList = data;
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
