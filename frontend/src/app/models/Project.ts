import {Card} from "./Card";

export class Project{
  constructor(
    public id : number,
    public title : string,
    public date : string,
    public description : string,
    public videoUrl : string,
    public features : string,
    public progress : string,
    public result : string,
    public githubLink : string,
    public card : Card,
  ) {
  }
}
