import { Component, ElementRef,  Input, OnInit, ViewChild} from '@angular/core';
import {Card} from "./models/card";
import {CommonModule, NgFor, ViewportScroller} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CardListComponent} from "./card-list/card-list.component";
import {PitchComponent} from "./pitch/pitch.component";
import {TestComponent} from "./test/test.component";
import {SidebarComponent} from "./sidebar/sidebar.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NgFor,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CardListComponent,
    PitchComponent,
    TestComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @Input() cardMainMenu! : Card[]
  showSidebar: boolean = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}


  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.scrollUp()
      }
    });
  }

  scrollUp(){
    this.viewportScroller.scrollToPosition([0,0])
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
