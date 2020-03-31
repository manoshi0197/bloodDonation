import { Component, OnInit } from '@angular/core';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { BloodBankService } from 'src/app/revamp/blood-bank.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-unit',
  templateUrl: './admin-unit.component.html',
  styleUrls: ['./admin-unit.component.css']
})
export class AdminUnitComponent implements OnInit {

  BPlusUnits:number;
  APlusUnits:number;
  OPlusUnits:number;
  ABPlusUnits:number;
  BMinusUnits:number;
  AMinusUnits:number;
  OMinusUnits:number;
  ABMinusUnits:number;

  isAdmin:boolean;
  isHospital:boolean;

  constructor(private blood: BloodAvailablityService, private bloodBankService:BloodBankService, private userService:UserService) { }

  ngOnInit() {
    this.isHospital = this.userService.isHospital;
    this.isAdmin = this.userService.isAdmin;
    this.getBPlusUnits();
    this.getAPlusUnits();
    this.getABPlusUnits();
    this.getOPlusUnits();
    this.getABMinusUnits();
    this.getAMinusUnits();
    this.getBMinusUnits();
    this.getOMinusUnits();
  }

  getBPlusUnits(){
    this.blood.getAvailableUnitsForAdmin("B+").subscribe( (res)=>{
      this.BPlusUnits = res;
    } );
  }
  getAPlusUnits(){
    this.blood.getAvailableUnitsForAdmin("A+").subscribe( (res)=>{
      this.APlusUnits = res;
    } );
  }
  getOPlusUnits(){
    this.blood.getAvailableUnitsForAdmin("O+").subscribe( (res)=>{
      this.OPlusUnits = res;
    } );
  }
  getABPlusUnits(){
    this.blood.getAvailableUnitsForAdmin("AB+").subscribe( (res)=>{
      this.ABPlusUnits = res;
    } );
  }
  getBMinusUnits(){
    this.blood.getAvailableUnitsForAdmin("B-").subscribe( (res)=>{
      this.BMinusUnits = res;
    } );
  }
  getAMinusUnits(){
    this.blood.getAvailableUnitsForAdmin("A-").subscribe( (res)=>{
      this.AMinusUnits = res;
    } );
  }
  getOMinusUnits(){
    this.blood.getAvailableUnitsForAdmin("O-").subscribe( (res)=>{
      this.OMinusUnits = res;
    } );
  }
  getABMinusUnits(){
    this.blood.getAvailableUnitsForAdmin("AB-").subscribe( (res)=>{
      this.ABMinusUnits = res;
    } );
  }

}
