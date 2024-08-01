import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../services/card-service.service";
import {Card} from "../models/card";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {RouterLink} from "@angular/router";


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

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardsMainMenu = this.cardService.getCardsMainMenu()
  }


}
