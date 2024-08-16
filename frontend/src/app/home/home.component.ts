import { Component } from '@angular/core';
import {PitchComponent} from "../pitch/pitch.component";
import {CardListComponent} from "../card-list/card-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PitchComponent,
    CardListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
