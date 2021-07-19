export class Quotes {
    public upvote;
    public downvote;
    constructor(public id:number, public quote:string,public author:string,public publisher: string)
    {
        this.upvote=0;
        this.downvote=0;
    }
}