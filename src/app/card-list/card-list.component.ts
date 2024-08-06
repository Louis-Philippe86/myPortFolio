import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../models/card";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {ActivatedRoute, NavigationEnd, provideRouter, Router, RouterLink, RouterLinkWithHref} from "@angular/router";
import {DatasService} from "../services/datas.service";
import {routes} from "../app.routes";



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
  cardsMainMenu!: Card[]
  cardsProject! : Card[]
  path! : string

  constructor(private datasService: DatasService, private router : Router ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path =  e.url
      }
    });
  }

  ngOnInit(): void {
    this.cardsMainMenu = this.datasService.getCardsMainMenu()
    this.cardsProject = this.datasService.getCardsProject()

    }




}
