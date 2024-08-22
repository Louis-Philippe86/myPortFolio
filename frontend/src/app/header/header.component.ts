import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {MenuToggleService} from "../services/menu-toggle.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(private menuService: MenuToggleService) { }

  toggleMenuNav(event : Event) {
    this.menuOpen = !this.menuOpen
    event.stopPropagation()
  }
  closeMenuNav(){
    this.menuOpen = false
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const isClickInsideMenu = this.menuService.closeMenu(event, 'small-screen-menu-content');
    if (!isClickInsideMenu) {
      this.menuOpen = false;
    }
  }
}
