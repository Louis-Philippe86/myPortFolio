import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncateTextPipe} from "../pipe/truncate-text.pipe";
import {AppComponent} from "../app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TruncateTextPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TruncateTextPipe
  ]
})
export class SharedModule { }
