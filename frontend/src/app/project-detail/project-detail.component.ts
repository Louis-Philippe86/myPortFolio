import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";
import {NgForOf, NgIf} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {LoadingComponent} from "../loading/loading.component";
import {MenuToggleService} from "../services/menu-toggle.service";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    NgIf,
    SharedModule,
    NgForOf,
    RouterLink,
    LoadingComponent
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit{
  project!: Project;
  projectId! : number;
  showSummary! : boolean;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private projectService : ProjectService,
    private menuService : MenuToggleService) { }

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData()
  }

  loadData() {
    this.isLoading = true;
    this.projectService.getProjectById(this.projectId).subscribe({
      next: (project: Project) => {
        this.project = project;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des du projet', error);
        this.isLoading = false; // Arrête le chargement même en cas d'erreur
        // TODO: Gérer une page d'erreur ou afficher un message d'erreur à l'utilisateur
      }
    });
  }
  toggleSummary(event : Event) {
    this.showSummary = !this.showSummary
    event.stopPropagation()
  }
  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const isClickInsideMenu = this.menuService.closeMenu(event, 'body-summary');
    if (!isClickInsideMenu) {
      this.showSummary = false;
    }
  }
}
