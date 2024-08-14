import {Card} from "./card";

export class Project{
  constructor(
    public id : number,
    public title : string,
    public date : string,
    public description : string,
    public objective : string,
    public features : string,
    public progress : string,
    public result : string,
    public card : Card,
  ) {
  }
}
