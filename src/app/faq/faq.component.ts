import { Component, OnInit } from '@angular/core';
import { faq } from './faq';
import { FaqService } from '../service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq:faq = {
    faqId:null,
    question:"",
    answer:"",
    answered:false,
    userId:2
  };
  question:string;
  submittedFeedback =false;

  constructor(private faqService:FaqService) { }

  ngOnInit() {
  }

  onPost(){
    this.submittedFeedback = true;
    this.faq.question = this.question;
    this.faq.answer = "";
    this.faq.answered = false;
    this.faq.userId = 2;

    this.faqService.postQuestion(this.faq).subscribe((res)=>{console.log("SUCCESS")});
  }

}
