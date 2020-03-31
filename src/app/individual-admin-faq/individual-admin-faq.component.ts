import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faq } from '../faq/faq';
import { FaqService } from '../service/faq.service';

@Component({
  selector: 'app-individual-admin-faq',
  templateUrl: './individual-admin-faq.component.html',
  styleUrls: ['./individual-admin-faq.component.css']
})
export class IndividualAdminFaqComponent implements OnInit {

  id: number;
  question: string;
  response: string;

  @Input() quest:faq;
  @Output() answered = new EventEmitter();

  answeredFaq: faq = {
    faqId: undefined,
    question: undefined,
    answer: undefined,
    answered: undefined,
    userId: undefined,
  };

  constructor(private faqService: FaqService) { }

  ngOnInit() {

  }

  onAnswer() {
    this.answeredFaq.faqId = this.quest.faqId;
    this.answeredFaq.question = this.quest.question;
    this.answeredFaq.answer = this.response;
    this.answeredFaq.answered = true;
    this.answeredFaq.userId = this.quest.userId;



    this.faqService.answerQuestion(this.answeredFaq).subscribe((res) => { console.log("SUCCESS") });
    console.log(this.answeredFaq);
    this.answered.emit(this.answeredFaq.faqId);
    //this.getUnAnsweredQuestion();

  }

}
