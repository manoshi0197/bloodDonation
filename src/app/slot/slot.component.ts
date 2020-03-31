import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { slot } from './slot';
import { SlotService } from '../service/slot.service';
import { StateAndCitiesService } from '../service/state-and-cities.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  issumitted = false;
  public valid: boolean = false;
  appointmentForm: FormGroup;

  Slot: slot;
  cities: string[];
  slotBooked: number;

  HospitalName = '';
  City = '';
  Date;
  Time = '';

  constructor(private slotService: SlotService, private locationService: StateAndCitiesService, private userService: UserService) { }

  ngOnInit() {
    this.appointmentForm = new FormGroup({
      HospitalName: new FormControl(this.HospitalName, [Validators.required]),
      City: new FormControl(this.City, [Validators.required]),
      Date: new FormControl(this.Date, [Validators.required]),
      Time: new FormControl(this.Time, [Validators.required])
    });

    this.getCities();

  }

  get f() {
    return this.appointmentForm.controls;
  }

  getCities() {
    this.locationService.getCities("ALL").subscribe((res) => {
      this.cities = res;
    });
  }

  onSubmit() {

    this.issumitted = true;
    console.log(this.appointmentForm.value)

    if (this.appointmentForm.invalid) {

      return;
    }

    this.valid = true;
    console.log(this.appointmentForm);
    this.Slot = {
      slotId: 0,
      hospitalName: this.appointmentForm.value.HospitalName,
      city: this.appointmentForm.value.City,
      date: this.appointmentForm.value.Date,
      time: this.appointmentForm.value.Time,
      donorId: this.userService.user.userId
    }
    console.log(this.Slot);
    this.slotService.checkSlotAvailability(this.Slot).subscribe((res) => { this.slotBooked = res });
    if (this.slotBooked < 3) {
      this.slotBooking();
    }
    else {
      console.log("SLots are not Available");
    }
  }
  slotBooking() {

    this.slotService.bookSlot(this.Slot).subscribe((res) => { console.log("success") });
    return this.valid = true;
  }

}
