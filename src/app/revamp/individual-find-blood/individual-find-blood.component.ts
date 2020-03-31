import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { findblood } from 'src/app/carousel/findblood/findblood';

@Component({
  selector: 'app-individual-find-blood',
  templateUrl: './individual-find-blood.component.html',
  styleUrls: ['./individual-find-blood.component.css']
})
export class IndividualFindBloodComponent implements OnInit {

  @Input() blood: findblood;
  @Output() requestBlood = new EventEmitter();
  url: string;

  constructor() { }

  ngOnInit() {
    if (this.blood.bloodGroup == "O+") {
      this.url = "./../assets/image/O_type.svg";
    }
    if (this.blood.bloodGroup == "B+") {
      this.url = "./../assets/image/B_type.svg";
    }
  }

  checkIfUnitsEqualToZero() {
    if (this.blood.units == 0) {
      return true;
    }
    else {
      return false;
    }
  }

}
