import {Language} from "./Language";
import {Project} from "./Project";

export class Card {


  constructor(public title: string,
              public description: string,
              public urlCardPicture: string,
              public project : Project,
              public card: Card,
              public languages?: Language[],
              public hrefUrl? : string,
  ){}



}
