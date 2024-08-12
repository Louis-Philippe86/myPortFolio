import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextParserService {

  constructor() { }

  parse(text: string): string {
    let parsedText = text;
    parsedText = parsedText.replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>');
    parsedText = parsedText.replace(/\[h1\](.*?)\[\/h1\]/g, '<h1>$1</h1>');
    parsedText = parsedText.replace(/\[h2\](.*?)\[\/h2\]/g, '<h2>$1</h2>');
    parsedText = parsedText.replace(/\[strong\](.*?)\[\/strong\]/g, '<strong>$1</strong>');
    parsedText = parsedText.replace(/\[p\](.*?)\[\/p\]/g, '<p>$1</p>');
    parsedText = parsedText.replace(/\[em\](.*?)\[\/em\]/g, '<em>$1</em>');
    parsedText = parsedText.replace(/\[ul\](.*?)\[\/ul\]/g, '<ul>$1</ul>');
    parsedText = parsedText.replace(/\[li\](.*?)\[\/li\]/g, '<li>$1</li>');
    return parsedText;
  }
}
