import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:any;
  @Output() isComlete=new EventEmitter<boolean>();
  constructor() { }

  quoteDelete(doDelete:boolean){
    this.isComlete.emit(doDelete);

  }
  ngOnInit(): void {
  }

}
