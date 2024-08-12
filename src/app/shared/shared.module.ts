import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncateTextPipe} from "../pipe/truncate-text.pipe";
import {ParseTextPipe} from "../pipe/parse-text.pipe";

@NgModule({
  declarations: [
    TruncateTextPipe,
    ParseTextPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TruncateTextPipe,
    ParseTextPipe
  ]
})
export class SharedModule { }
