import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  color="#FFFF00"
  quotes:Quotes[]=[
    new Quotes(1,"this is a quote","Victoria Okuku","Atieno",new Date(2021,6,20)),
    new Quotes(2,"quote is me ","Victoria Okuku","Atieno",new Date(2021,6,2)),
    new Quotes(3,"qqqq","Victoria Okuku","Atieno",new Date(2021,6,10)),
    new Quotes(4,"Kenya Yetu","Victoria Okuku","Atieno",new Date(2021,6,3))
  ]
  ;
  max:any;
  getMax():any{
    this.max=0;
    this.quotes.forEach(quote=>{
      if(quote.id>this.max){
        this.max=quote.id;
      }
    return this.max;
    });
  }
  maximum=this.getMax();
  constructor() { 
    
  }
  getHighest(index: any){
    Math.max(this.quotes[index].id);

  }
  toggleQuote(index:number){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  
  deleteQuote(isComlete: any,index:any){
    if(isComlete){
      const toDelete=confirm('Are you sure you want to delete this quote?');
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  upVoteQuote(isClick:any,index:any){
    if(isClick){
      const doUp=confirm('Are you sure you want to up vote this quote?');
      if(doUp){
        this.quotes[index].upvote=this.quotes[index].upvote+1;
      }
    }
  }
  downVoteQuote(isClicked: any,index:any){
    if(isClicked){
      const doDown=confirm('Are you sure you want to down vote this quote?');
      if(doDown){
        this.quotes[index].downvote=this.quotes[index].downvote+1;
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
