import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/service/faq.service';
import { faq } from 'src/app/faq/faq';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-faq-new',
  templateUrl: './faq-new.component.html',
  styleUrls: ['./faq-new.component.css']
})
export class FaqNewComponent implements OnInit {

  faqs:faq[];
  name:string;

  constructor(private faqService: FaqService, private userService:UserService) { }

  ngOnInit() {
    this.name = this.userService.user.firstName+" "+this.userService.user.lastName; 
    this.getAnsweredQuestion();
  }

  getAnsweredQuestion(){
    this.faqService.getAnsweredQuestion().subscribe((res) => this.faqs = res);
    this.faqService.getSubject().subscribe((data) => {
      this.faqs = data;
    });
  }

}
