import { Injectable } from '@angular/core';
import {Card} from "../models/card";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}
  private cardsMainMenu : Card[] = [
    new Card(
      "Compétences",
      "Ma compétence principale ? Transformer un bureau en ruines en " +
      "espace de travail grâce à la magie du café et à un soupçon de bonne volonté.",
      "./assets/cardPictures/skills.jpg",undefined,"/skills"),
    new Card(
      "Qui suis-je ?",
      "Voilà qui je suis !!",
      "./assets/cardPictures/biographie.jpg"),
    new Card(
      "Projets ",
      "Liste des projets",
      "./assets/cardPictures/projects.jpg"),
  ]


  getCardsMainMenu() : Card[]{
    return [...this.cardsMainMenu]
  }
}
