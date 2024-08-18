import {Component,  OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {NavigationEnd,  Router, RouterLink} from "@angular/router";
import {CardService} from "../services/card.service";
import {ProjectService} from "../services/project.service";
import {Card} from "../models/Card";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent,
    RouterLink,
    NgIf,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit{
  cardsMainMenu: Card[] = []
  cardsProject : any = []
  path! : string

  constructor(private cardService : CardService, private router : Router, private projectService : ProjectService ) {
    //ScrollUp auto en cas de changement de page
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path =  e.url
      }
    });
  }

  ngOnInit(): void {
    //Récupération des cartes qui ne sont pas des projets
    this.cardService.getCards().subscribe((cards : any) =>{
      for (let card of cards) {
        if(card.languages.length === 0){
          this.cardsMainMenu.push(card)
        }
      }
    })
    //Récupération des cartes qui sont pas des projets
    this.projectService.getProjects().subscribe((projects : any) =>{
      for (let project of projects){
        this.cardsProject.push(project)
      }
    })
  }

}
