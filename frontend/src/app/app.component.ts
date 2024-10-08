import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Card} from "./models/Card";
import {CommonModule, NgFor, ViewportScroller} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CardListComponent} from "./card-list/card-list.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MenuToggleService} from "./services/menu-toggle.service";

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
    private viewportScroller: ViewportScroller,
    private menuService : MenuToggleService,
  ) {}


  ngOnInit() {
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          const fragment = this.router.routerState.snapshot.root.fragment;
          if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
          } else {
            this.scrollUp();
          }
        }
      });
  }

  scrollUp(){
    this.viewportScroller.scrollToPosition([0,0])
  }

  toggleSidebar(event : Event) {
    this.showSidebar = !this.showSidebar;
    event.stopPropagation()
  }
  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const isClickInsideMenu = this.menuService.closeMenu(event, 'sidebar');
    if (!isClickInsideMenu) {
      this.showSidebar = false;
    }
  }
}
