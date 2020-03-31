import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DonationCampService } from 'src/app/service/donation-camp.service';
import { DonationCamp } from '../donation-camp-list/donation-camp';

@Component({
  selector: 'app-donation-camp-individual',
  templateUrl: './donation-camp-individual.component.html',
  styleUrls: ['./donation-camp-individual.component.css']
})
export class DonationCampIndividualComponent implements OnInit {

  @Input()
  donationCamp: DonationCamp;
  @Output() 
  requestBlood = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
