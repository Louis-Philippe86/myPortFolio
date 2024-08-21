import { Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {SoftSkillComponent} from "../soft-skill/soft-skill.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {DatasService} from "../services/datas.service";
import {HardSkillComponent} from "../hard-skill/hard-skill.component";
import {SkillsService} from "../services/skills.service";
import {ModalService} from "../services/modal-service";
import {LoadingComponent} from "../loading/loading.component";


@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    SharedModule,
    SoftSkillComponent,
    NgOptimizedImage,
    NgForOf,
    HardSkillComponent,
    LoadingComponent,
    NgIf
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit{
  @Input() softSkillsList : any[] = []
  @Input() languageSkills : any[] =[]
  @Input() frameworkList : any[] = []
  @Input() otherList : any[] = []
  modalTitle! : string
  modalContent! : string
  isLoading : boolean = true

  //Jauge de test
  levelChoices! : {option : string, purcent : number}[]
  index : number = 3

  constructor(public datasService : DatasService, private skillService : SkillsService, private modalService : ModalService ) {}

  ngOnInit(): void {
    this.levelChoices = this.datasService.choice
    this.loadData()
  }
  openModal(title : string, description : string) {
    this.modalTitle = title
    this.modalContent = description
    this.modalService.open();
  }

  nextChoiceLevel() {
    if (this.index < this.levelChoices.length - 1) {
      this.index++;

    }
  }
  previousChoiceLevel() {
    if (this.index > 0) {
      this.index--;
    }
  }

  private loadData() {
    this.skillService.getSkills().subscribe({

      next: (skills) => {
        for (let skill of skills) {
          if (skill.skillType === 'framework') {
            this.frameworkList.push(skill);
          } else if (skill.skillType === 'language') {
            this.languageSkills.push(skill);
          } else if (skill.skillType === 'softskill') {
            this.softSkillsList.push(skill);
          } else if (skill.skillType === 'other') {
            this.otherList.push(skill);
          }
        }
        this.isLoading = false
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données', error);
        this.isLoading = false;  // Arrête le chargement même en cas d'erreur
        // TODO: Gérer une page d'erreur ou afficher un message d'erreur à l'utilisateur
      }
    });

  }
}
