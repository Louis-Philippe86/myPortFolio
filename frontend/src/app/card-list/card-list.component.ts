import {Component, OnInit, Output, output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {NavigationEnd,  Router, RouterLink} from "@angular/router";
import {CardService} from "../services/card.service";
import {ProjectService} from "../services/project.service";
import {Card} from "../models/Card";
import {LoadingComponent} from "../loading/loading.component";


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent,
    RouterLink,
    NgIf,
    LoadingComponent,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit{
  cardsMainMenu: Card[] = []
  cardsProject : any = []
  path! : string
  isLoading: boolean = true;

  constructor(private cardService : CardService, private router : Router, private projectService : ProjectService ) {
    //ScrollUp auto en cas de changement de page
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path =  e.url
      }
    });
  }
  ngOnInit(): void {
    // Charge les données des cartes
    this.loadData();
  }

  loadData() {
    // Démarre le chargement des cartes
    this.isLoading = true;
    this.cardService.getCards().subscribe({
      next: (cards: Card[]) => {
        // @ts-ignore
        this.cardsMainMenu = cards.filter(card => card.languages.length === 0);
        this.isLoading = false; // Arrête le chargement après récupération des cartes
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des cartes', error);
        this.isLoading = false; // Arrête le chargement même en cas d'erreur
        // TODO: Gérer une page d'erreur ou afficher un message d'erreur à l'utilisateur
      }
    });
    // Démarre le chargement des projets
    this.projectService.getProjects().subscribe({
      next: (projects: any) => {
        this.cardsProject = projects; // Ajout direct sans boucle
        this.isLoading = false; // Arrête le chargement après récupération des projets
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.isLoading = false; // Arrête le chargement même en cas d'erreur
        // TODO: Gérer une page d'erreur ou afficher un message d'erreur à l'utilisateur
      }
    });
  }

}
