import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { experience } from './experience';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  availableExperience : experience[];

  postFeedback : experience;
  experienceForm: FormGroup;

  constructor(private feedbackService : FeedbackService) { }

  ngOnInit() {
    this.experienceForm= new FormGroup({
      HospitalName: new FormControl(),
      City: new FormControl(),
      Comment: new FormControl()
    });

  }
  onclick()
  {
    console.log(this.availableExperience);
    //this.availableBlood = this.blood.getAvailableBlood();
    this.feedbackService.getAllFeedback().subscribe((res) => this.availableExperience = res);
      this.feedbackService.getSubject().subscribe((data) => {
        this.availableExperience = data;  
      });
    }

    onSubmit(){

      console.log(this.experienceForm);
      this.postFeedback={
        hospitalName:this.experienceForm.value.HospitalName,
        city:this.experienceForm.value.City,
        comment:this.experienceForm.value.Comment,
        userId:1
      }
      this.feedbackService.postFeedback(this.postFeedback).subscribe((res)=>{console.log("SUCCESS")});
      console.log(this.postFeedback);
}
}
