import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,"this is a quote","Victoria Okuku","Atieno")
  ]
  constructor() { }
  toggleQuote(index:number){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  ngOnInit(): void {
  }

}
