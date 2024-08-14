import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";



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
export class TestComponent implements OnInit{

  showSummary! : boolean
  project! : Project

  constructor(
    private projectService : ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getProjectById(2).subscribe((project: any) => {
      this.project = project;
    });
  }

  toggleSummary() {
    this.showSummary = !this.showSummary
  }
}
