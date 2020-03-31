import { Component, OnInit } from '@angular/core';
import { faq } from 'src/app/faq/faq';
import { FaqService } from 'src/app/service/faq.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id: number;
  question: string;
  faq: faq[];
  adminForm: FormGroup;
  answeredFaq: faq = {
    faqId: undefined,
    question: undefined,
    answer: undefined,
    answered: undefined,
    userId: undefined,
  };

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.getUnAnsweredQuestion();

    this.adminForm = new FormGroup(
      {
        FaqId: new FormControl(''),
        response: new FormControl()
      });
  }

  onAnswer(faqId) {
    this.answeredFaq.faqId = faqId;
    this.answeredFaq.question = "test 3";
    this.answeredFaq.answer = this.adminForm.value.response;
    this.answeredFaq.answered = true;
    this.answeredFaq.userId = 2;



    this.faqService.answerQuestion(this.answeredFaq).subscribe((res) => { console.log("SUCCESS") });
    console.log(this.answeredFaq);
    this.getUnAnsweredQuestion();

  }

  updateUnAnsweredQuestion(id:number){
    let index;
    for (let i in this.faq) {
      if (id == this.faq[i].faqId) {
        index = i;
      }
    }
    if (index > -1) {
      this.faq.splice(index, 1);
    }
  }

  getUnAnsweredQuestion() {
    this.faqService.getUnAnsweredQuestion().subscribe((res) => {
      this.faq = res;
      if(this.faq.length === 0){
        console.log("empty");
      }
    });
    this.faqService.getSubject().subscribe((data) => {
      this.faq = data;
    });
  }
}
