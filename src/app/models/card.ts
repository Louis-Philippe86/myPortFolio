import {Language} from "./Language";


export class Card {

  constructor(public title: string,
              public description: string,
              public urlCardPicture: string,
              public languages?: Language[],
              public hrefUrl? : string,
              public project? : boolean
  ){}



}
