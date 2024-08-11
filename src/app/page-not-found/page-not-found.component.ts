import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',

})

export class PageNotFoundComponent {

}
