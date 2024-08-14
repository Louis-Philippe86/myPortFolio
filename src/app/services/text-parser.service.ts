import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextParserService {

  constructor() { }

  parse(text: string): string {
    let parsedText = text;
    parsedText = parsedText.replace(/\[div(?: class="(.*?)")?\](.*?)\[\/li\]/g, '<div class="$1">$2</div>');
    parsedText = parsedText.replace(/\[h1(?: class="(.*?)")?\](.*?)\[\/h1\]/g, '<h1 class="$1">$2</h1>');
    parsedText = parsedText.replace(/\[h2(?: class="(.*?)")?\](.*?)\[\/h2\]/g, '<h2 class="$1">$2</h2>');
    parsedText = parsedText.replace(/\[strong(?: class="(.*?)")?\](.*?)\[\/strong\]/g, '<strong class="$1">$2</strong>');
    parsedText = parsedText.replace(/\[a href="(.*?)"(?: class="(.*?)")? target="_blank"\](.*?)\[\/a\]/g, '<a href="$1" class="$2" target="_blank">$3</a>');
    parsedText = parsedText.replace(/\[span(?: class="(.*?)")?\](.*?)\[\/span\]/g, '<span class="$1">$2</span>');
    parsedText = parsedText.replace(/\[p(?: class="(.*?)")?\](.*?)\[\/p\]/g, '<p class="$1">$2</p>');
    parsedText = parsedText.replace(/\[em(?: class="(.*?)")?\](.*?)\[\/em\]/g, '<em class="$1">$2</em>');
    parsedText = parsedText.replace(/\[ul(?: class="(.*?)")?\](.*?)\[\/ul\]/g, '<ul class="$1">$2</ul>');
    parsedText = parsedText.replace(/\[li(?: class="(.*?)")?\](.*?)\[\/li\]/g, '<li class="$1">$2</li>');

    return parsedText;
  }
}
