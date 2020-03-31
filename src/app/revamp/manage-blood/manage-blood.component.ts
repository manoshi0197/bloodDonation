import { Component, OnInit } from '@angular/core';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';
import { BloodBankService } from '../blood-bank.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-manage-blood',
  templateUrl: './manage-blood.component.html',
  styleUrls: ['./manage-blood.component.css']
})
export class ManageBloodComponent implements OnInit {

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

  bloodBankName:string;

  constructor(private blood: BloodAvailablityService, private bloodBankService:BloodBankService, private userService:UserService) { }

  ngOnInit() {
    this.bloodBankName = this.bloodBankService.bloodBank.bloodBankName;
    this.isHospital = this.userService.isHospital;
    this.isAdmin = this.userService.isAdmin;
    console.log(this.bloodBankName);
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
    this.blood.getAvailableUnitsForHospital("B+",this.bloodBankName).subscribe( (res)=>{
      this.BPlusUnits = res;
    } );
  }
  getAPlusUnits(){
    this.blood.getAvailableUnitsForHospital("A+",this.bloodBankName).subscribe( (res)=>{
      this.APlusUnits = res;
    } );
  }
  getOPlusUnits(){
    this.blood.getAvailableUnitsForHospital("O+",this.bloodBankName).subscribe( (res)=>{
      this.OPlusUnits = res;
    } );
  }
  getABPlusUnits(){
    this.blood.getAvailableUnitsForHospital("AB+",this.bloodBankName).subscribe( (res)=>{
      this.ABPlusUnits = res;
    } );
  }
  getBMinusUnits(){
    this.blood.getAvailableUnitsForHospital("B-",this.bloodBankName).subscribe( (res)=>{
      this.BMinusUnits = res;
    } );
  }
  getAMinusUnits(){
    this.blood.getAvailableUnitsForHospital("A-",this.bloodBankName).subscribe( (res)=>{
      this.AMinusUnits = res;
    } );
  }
  getOMinusUnits(){
    this.blood.getAvailableUnitsForHospital("O-",this.bloodBankName).subscribe( (res)=>{
      this.OMinusUnits = res;
    } );
  }
  getABMinusUnits(){
    this.blood.getAvailableUnitsForHospital("AB-",this.bloodBankName).subscribe( (res)=>{
      this.ABMinusUnits = res;
    } );
  }


  updateBPlusUnits(){
    this.blood.updateUnitsByHospital("B+",this.BPlusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateAPlusUnits(){
    this.blood.updateUnitsByHospital("A+",this.APlusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateABPlusUnits(){
    this.blood.updateUnitsByHospital("AB+",this.ABPlusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateOPlusUnits(){
    this.blood.updateUnitsByHospital("O+",this.OPlusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateBMinusUnits(){
    this.blood.updateUnitsByHospital("B-",this.BMinusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateAMinusUnits(){
    this.blood.updateUnitsByHospital("A-",this.AMinusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateABMinusUnits(){
    this.blood.updateUnitsByHospital("AB-",this.ABMinusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

  updateOMinusUnits(){
    this.blood.updateUnitsByHospital("O-",this.OMinusUnits,this.bloodBankName).subscribe((res)=>console.log("changed"));
  }

}
