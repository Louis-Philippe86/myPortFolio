import {Language} from "./Language";


export class Card {

  constructor(public title: string,
              public description: string,
              public urlCardPicture: string,
              public programingLanguages?: Language[],
              public hrefUrl? : string){}

}
