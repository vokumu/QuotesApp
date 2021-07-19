export class Quotes {
    public upvote;
    public downvote;
    showDescription:boolean;
    constructor(public id:number, public quote:string,public author:string,public publisher: string)
    {
        this.upvote=0;
        this.downvote=0;
        this.showDescription=false;
    }
}