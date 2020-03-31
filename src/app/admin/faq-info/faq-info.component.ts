import { Component, OnInit, Input, Output } from '@angular/core';
import { faq } from 'src/app/faq/faq';
import { FaqService } from 'src/app/service/faq.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-faq-info',
  templateUrl: './faq-info.component.html',
  styleUrls: ['./faq-info.component.css']
})
export class FaqInfoComponent implements OnInit {

  @Input() faq: faq;
  @Output() answer = new EventEmitter();
  isAdmin: boolean = false;
  cartAddedId: number;

  constructor() { }

  ngOnInit() {
  }

}
