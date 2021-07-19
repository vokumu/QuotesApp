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
  deleteQuote(isComlete: any,index:any){
    if(isComlete){
      const toDelete=confirm('Are you sure you want to delete this movie?');
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote:Quotes){
    const quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    //quote.viewDate=new Date(quote.viewDate);
    this.quotes.push(quote);



  }
  ngOnInit(): void {
  }

}
