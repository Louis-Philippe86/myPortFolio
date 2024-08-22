import {Component, HostListener, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {DatasService} from "../services/datas.service";
import {PersonalData} from "../models/PersonalData";
import {MenuToggleService} from "../services/menu-toggle.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  showSidebar: boolean = false;
  personalDatas! : PersonalData[];

  constructor(private dataService : DatasService) {
  }

  ngOnInit(): void {
    this.personalDatas = this.dataService.getPersonalDatas()
  }


}
