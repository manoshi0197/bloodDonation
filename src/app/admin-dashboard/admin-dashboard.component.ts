import { Component, OnInit } from '@angular/core';
import { BloodAvailablityService } from '../service/blood-availablity.service';
import { FaqService } from '../service/faq.service';
import { faq } from '../faq/faq';
import { UserService } from '../service/user.service';
import { BloodRequestService } from '../service/blood-request.service';
import { MyRequest } from '../my-request/myRequest';
import { MyRequestService } from '../service/my-request.service';
import { experience } from '../experience/experience';
import { FeedbackService } from '../service/feedback.service';
import { BloodBankService } from '../revamp/blood-bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalUnits: number;
  totalDonors: number;
  totalBloodBanks: number;
  totalUnanswered: number;
  totalRequests: number;
  faq: faq[];
  isAdmin: boolean;
  isHospital: boolean;
  hospitalRequest: MyRequest[];
  feedbacks: experience[];

  bloodBankId: number;

  constructor(private router: Router, private blood: BloodAvailablityService, private faqService: FaqService, private userService: UserService, private requestService: BloodRequestService, private requestStatusService: MyRequestService, private feedbackService: FeedbackService, private bloodBankService: BloodBankService) { }

  ngOnInit() {
    this.isAdmin = this.userService.isAdmin;
    console.log(this.isAdmin);
    console.log("3rd");
    console.log(this.bloodBankId);
    this.initializeDashboard();
  }

  initializeDashboard() {

    this.isAdmin = this.userService.isAdmin;
    this.isHospital = this.userService.isHospital;

    if (this.isHospital) {
      this.bloodBankId = this.bloodBankService.bloodBank.bloodBankId;
      this.hospitalRequest = null;
    }

    this.updateTotalUnits();

    this.faqService.getUnAnsweredQuestion().subscribe((res) => {
      this.faq = res;
      this.totalUnanswered = this.faq.length;
    });

    this.userService.getNumberOfDonors().subscribe((res) => {
      this.totalDonors = res;
    });

    this.requestService.getTodaysRequest().subscribe((res) => {
      this.totalRequests = res;
    });

    if (this.isHospital) {
      this.requestStatusService.getHospitalRequest(this.bloodBankId).subscribe((res) => {
        this.hospitalRequest = res;
      });
    }

    this.getFeedbacks();
  }

  updateTotalUnits() {
    this.blood.getAvailableUnitsForAdmin("ALL").subscribe((res) => {
      this.totalUnits = res;
    });
  }

  //updates the requests after every accept or reject
  updateRequests(id: number) {
    //console.log(this.hospitalRequest);
    let index;
    for (let i in this.hospitalRequest) {
      if (id == this.hospitalRequest[i].id) {
        index = i;
      }
    }
    if (index > -1) {
      this.hospitalRequest.splice(index, 1);
    }
    //console.log(this.hospitalRequest);
    this.totalUnits = this.totalUnits - 1;
  }

  getFeedbacks() {
    this.feedbackService.getAllFeedback().subscribe((res) => {
      this.feedbacks = res;
    });
  }

  navigateToDashboard() {
    this.router.navigate(['/loading-page']);
  }




}
