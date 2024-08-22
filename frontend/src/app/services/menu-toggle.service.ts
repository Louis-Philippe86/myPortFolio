import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

  constructor() { }

  closeMenu(event: Event, menuClass: string): boolean {
    const menuElements = document.getElementsByClassName(menuClass);
    let isClickInsideMenu = false;

    for (let i = 0; i < menuElements.length; i++) {
      if (menuElements[i].contains(event.target as Node)) {
        isClickInsideMenu = true;
        break;
      }
    }

    return isClickInsideMenu;
  }
}
