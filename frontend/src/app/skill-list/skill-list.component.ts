import { Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {SoftSkillComponent} from "../soft-skill/soft-skill.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DatasService} from "../services/datas.service";
import {HardSkillComponent} from "../hard-skill/hard-skill.component";
import {HardSkills} from "../models/HardSkills";
import {SoftSkill} from "../models/SoftSkill";
import {SkillsService} from "../services/skills.service";
import {ModalService} from "../services/modal-service";


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
    HardSkillComponent
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit{
  @Input() softSkillsList : SoftSkill[] = []
  @Input() languageSkills : HardSkills[] =[]
  @Input() frameworkList : HardSkills[] = []
  @Input() otherList : HardSkills[] = []
  modalTitle! : string
  modalContent! : string

  //Jauge de test
  levelChoices! : {option : string, purcent : number}[]
  index : number = 3

  constructor(public datasService : DatasService, private skillService : SkillsService, private modalService : ModalService ) {}

  ngOnInit(): void {
    this.levelChoices = this.datasService.choice
    this.skillService.getSkills().subscribe((skills: any) => {
      for (let skill of skills){
        if(skill.skillType === 'framework'){
          this.frameworkList.push(skill)
        }else if(skill.skillType === 'language'){
          this.languageSkills.push(skill)
        }else if(skill.skillType === 'softskill'){
          this.softSkillsList.push(skill)
        }else if(skill.skillType === 'other'){
          this.otherList.push(skill)
        }
      }
    });
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

}
