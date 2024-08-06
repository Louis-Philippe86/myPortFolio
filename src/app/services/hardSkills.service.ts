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
export class HardSkillsService {

  private apiUrl = 'http://localhost:8080/api/hardskills';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHardSkills(): Observable<HardSkills> {
    return this.http.get<HardSkills>(this.apiUrl, {responseType: "json"})

  }










  getSoftSkillsList(): Skill[] {
    return this.softSkillsList;
  }

  getHardskillsList(): any{
    return this.hardskillsList;
  }

  getFramworkList(): any {
    return this.framworkList;
  }

  getCareer(): Career[] {
    return this.career;
  }

  getCardsMainMenu() {
    return this.cardsMainMenu;
  }

  getCardsProject() {
    return this.cardsPorject;
  }



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


  private hardskillsList = [
    {programingLanguage : new Language('html 5','logos:html-5'),value : 70},
    {programingLanguage : new Language('CSS 3','logos:css-3'),value : 70},
    {programingLanguage : new Language('javaScript','skill-icons:javascript'),value : 50},
    {programingLanguage : new Language('typeScript','skill-icons:typescript'),value : 50},
    {programingLanguage : new Language('Java 17','skill-icons:java-light'),value : 70},
    {programingLanguage : new Language('Php 8','skill-icons:php-light'),value : 70},

  ]

  private framworkList = [
    {programingLanguage : new Language('Symphony','skill-icons:symfony-light'),value : 70},
    {programingLanguage : new Language('Laravel','skill-icons:laravel-light'),value : 70},
    {programingLanguage : new Language('Livewire','simple-icons:livewire'),value : 70},
    {programingLanguage : new Language('Angular','skill-icons:angular-light'),value : 55},
    {programingLanguage : new Language('springBoot','skill-icons:spring-light'),value : 55},
    {programingLanguage : new Language('Bootstrap','skill-icons:bootstrap'),value : 70},

  ]

  private career : Career[] = [
    new Career(
      'Développeur fullStack sur intranet sous Laravel - Livewire',
      'Avril à juin 2024',
      './assets/infocite.jpg',
      [
        "Intégrations de plusieurs fonctionnalités (Système de notification, préférences utilisateur,..)",
        "Création de classes et fonctions associées à l‘affichage et la gestion d’articles.",
        "Mise en place de fonctions de filtres et de favoris.",
      ],
      {name : 'La cité des formation', city : 'Tours (37)' },
    ),
    new Career(
      'Responsable essais et métrologie',
      '2019 à 2022',
      './assets/metrologie.jpg',
      [
        "Création d’outils liés à la métrologie",
        "Suivi de projet sur des projets pour le nucléaire.",
        "Création et gestion d'essais fonctionnels.",
        "Création de documentations techniques en métrologie et essai.",
      ],
      {name : 'SDEC France', city : 'Reignac-sur Indre (37)' },
    ),
    new Career(
      'Technicien essais et responsable métrologie',
      '2013 à 2019',
      './assets/edf.jpg',
      [
        "Chargé d’essai sur des tests en lien direct avec la sureté nucléaire.",
        "Gestion du parc des instruments de mesure (planification, étalonnages, vérifications,).",
        "Création de procédures d'éssais",
      ],
      {name : 'EDF', city : 'CNPE de Belleville sur Loire (18)' },
    ),

    new Career(
      'Technicien mesures physiques et responsable 5S.',
      '2010 à 2013',
      './assets/meas.jpg',
      [
        "Etalonnage de capteurs de forces.",
        "Gestion de la documentation technique",
        "Responsable de la mise en place et du maintien du 5S.",
      ],
      {name : 'EDF', city : 'CNPE de Belleville sur Loire (18)' },
    ),
  ]


}
