import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    NgIf,
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
