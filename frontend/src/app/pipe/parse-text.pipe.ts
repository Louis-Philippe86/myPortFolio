import { Pipe, PipeTransform } from '@angular/core';
import {TextParserService} from "../services/text-parser.service";

@Pipe({
  name: 'parseText',
})
export class ParseTextPipe implements PipeTransform {

  constructor(private parserService : TextParserService) {
  }

  transform(text : string): string {
    return this.parserService.parse(text)
  }



}
