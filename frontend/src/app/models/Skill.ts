import {Language} from "./Language";

export class Skill{
  constructor(
    public title : string,
    public skillType : string,
    public description? : string,
    public level? : number,
    public citation? : string,
    public language? : Language,

  ) {
  }
}
