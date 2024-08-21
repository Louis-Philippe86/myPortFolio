import { Component } from '@angular/core';
import {CardListComponent} from "../card-list/card-list.component";
import {NgIf} from "@angular/common";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardListComponent,
    NgIf,
    LoadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
