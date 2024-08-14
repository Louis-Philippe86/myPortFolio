import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";
import {NgForOf, NgIf} from "@angular/common";
import {ParseTextPipe} from "../pipe/parse-text.pipe";
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    NgIf,
    SharedModule,
    NgForOf
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit{
  project!: Project;

  constructor(private route: ActivatedRoute, private projectService : ProjectService) { }

  ngOnInit(): void {
    let projectId : number = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(projectId).subscribe((project : Project) =>{
      this.project = project
    })
  }

}