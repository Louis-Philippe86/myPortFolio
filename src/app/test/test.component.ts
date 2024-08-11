import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

})
export class TestComponent {
  showSidebar: boolean = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

}
