import {Component,  OnInit} from '@angular/core';
import {Card} from "../models/card";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {NavigationEnd,  Router, RouterLink} from "@angular/router";
import {CardService} from "../services/card.service";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/Project";



@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent,
    RouterLink
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{
  cardsMainMenu: Card[] = []
  cardsProject : Card[] = []
  path! : string

  constructor(private cardService : CardService, private router : Router, private projectService : ProjectService ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path =  e.url
      }
    });
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards : any) =>{
      for (let card of cards) {
        if(card.languages.length === 0){
          this.cardsMainMenu.push(card)
        }
      }
    })
    this.projectService.getProjects().subscribe((projects : any) =>{
      for (let project of projects){
        this.cardsProject.push(project)
      }
    })
  }

}
