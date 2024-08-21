import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CareerService} from "../services/career.service";
import {Career} from "../models/Career";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    LoadingComponent
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit {
  works!: any
  isLoading: boolean = true

  constructor(private careerService: CareerService) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.isLoading = true;  // Démarre le chargement
    this.careerService.getCareers().subscribe({
      next: (career: Career[]) => {
        this.works = career;
        this.isLoading = false;  // Arrête le chargement après avoir récupéré les données
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données', error);
        this.isLoading = false;  // Arrête le chargement même en cas d'erreur
        // TODO: Gérer une page d'erreur ou afficher un message d'erreur à l'utilisateur
      }
    });
  }
}

