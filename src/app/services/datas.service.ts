import { Injectable } from '@angular/core';
import {Skill} from "../models/skill";
import {Career} from "../models/Career";
import {Card} from "../models/card";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HardSkills} from "../models/HardSkills";
import {Language} from "../models/Language";

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private apiUrl = 'http://localhost:8080/api/careers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCareers(): Observable<Career> {
    return this.http.get<Career>(this.apiUrl, {responseType: "json"})
  }

  getHardSkills(): Observable<HardSkills[]> {
    return this.http.get<HardSkills[]>(this.apiUrl, {responseType: "json"})
  }

  choice =[
    {option : "Hein ??" , purcent : 8},
    {option : "Novice" , purcent : 20},
    {option : "Débutant" , purcent : 40},
    {option : "Intermediaire" , purcent : 60},
    {option : "Expert" , purcent : 80},
    {option : "Maître de l'univers incontesté" , purcent : 110},
  ]



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
  private cardsPorject : Card[] = [
    new Card(
      "Intranet InfoCite",
      "Le projet \"Infocite\", qui est l'intranet de la cité des formations.",
      "./assets/infociteLogo.jpg",
      [
        {name : "Laravel" , logoUrl : 'skill-icons:laravel-light'},
        {name : "Livewire" , logoUrl : 'simple-icons:livewire'},
        {name : "PHP 8" , logoUrl : 'skill-icons:php-light'},
      ],
      "#"),
    new Card(
      "VideoTech",
      "Le projet \"VideoTech\", est un projet que j'ai développé dans le cadre de ma formation",
      "./assets/infocite.jpg",
      [
        {name : "Symfony" , logoUrl : 'skill-icons:symfony-light'},
        {name : "PHP 8" , logoUrl : 'skill-icons:php-light'},
      ],
      "#"),
  ]
  private softSkillsList =[
    new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),

  ]



  getSoftSkillsList(): Skill[] {
    return this.softSkillsList;
  }

  getCardsMainMenu() {
    return this.cardsMainMenu;
  }

  getCardsProject() {
    return this.cardsPorject;
  }
}
