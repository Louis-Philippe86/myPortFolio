import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Skill} from "../models/skill";
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {SkillComponent} from "../skill/skill.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Language} from "../models/language";

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    SharedModule,
    SkillComponent,
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit, AfterViewInit{
  @Input() softSkillsList! : Skill[]

  ngOnInit(): void {
    this.softSkillsList =[
      new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
      new Skill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    ]
  }

  index : number = 3
  choice =[
    {option : "Hein ??" , purcent : 8},
    {option : "Novice" , purcent : 20},
    {option : "Débutant" , purcent : 40},
    {option : "Intermediaire" , purcent : 60},
    {option : "Expert" , purcent : 80},
    {option : "Maître de l'univers incontesté" , purcent : 110},
  ]

  hardskillsList = [
    {programingLanguage : new Language('html 5','logos:html-5'),value : 60},
    {programingLanguage : new Language('CSS 3','logos:css-3'),value : 60},
    {programingLanguage : new Language('javaScript','skill-icons:javascript'),value : 40},
    {programingLanguage : new Language('typeScript','skill-icons:typescript'),value : 40},
    {programingLanguage : new Language('Java 17','skill-icons:java-light'),value : 60},
    {programingLanguage : new Language('Php 8','skill-icons:php-light'),value : 60},

  ]

  framworkList = [
    {programingLanguage : new Language('Symphony','skill-icons:symfony-light'),value : 40},
    {programingLanguage : new Language('Laravel','skill-icons:laravel-light'),value : 60},
    {programingLanguage : new Language('Livewire','devicon:livewire'),value : 60},
    {programingLanguage : new Language('Angular','skill-icons:angular-light'),value : 40},
    {programingLanguage : new Language('springBoot','skill-icons:spring-light'),value : 40},
    {programingLanguage : new Language('Bootstrap','devicon:bootstrap'),value : 60},

  ]

  @ViewChild('container', { static: true }) container!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.animateProgressBars(), 0);
  }

  animateProgressBars() {


    const bars = this.container.nativeElement.querySelectorAll('.progress-bar');


    bars.forEach((bar: HTMLElement) => {
      const value = bar.getAttribute('aria-valuenow');
      if (value) {
        bar.style.width = `${value}%`;
      }
    });
  }
  nextChoice() {
    if (this.index < this.choice.length - 1) {
      this.index++;

    }
  }
  previousChoice() {
    if (this.index > 0) {
      this.index--;

    }
  }

}
