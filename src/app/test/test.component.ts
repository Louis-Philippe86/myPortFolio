import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";
import {ModalService} from "../services/modal-service";
import {ModalComponent} from "../modals/modal.component";



@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ModalComponent
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

})
export class TestComponent implements OnInit{

  showSummary! : boolean
  project! : Project

  constructor(
    private projectService : ProjectService,private modal : ModalService) {
  }

  ngOnInit(): void {
    this.projectService.getProjectById(1).subscribe((project: any) => {
      this.project = project;
    });
  }

  toggleSummary() {
    this.showSummary = !this.showSummary
  }

}
