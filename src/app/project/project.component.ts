import { Component } from '@angular/core';
import {CardListComponent} from "../card-list/card-list.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CardListComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
