import { Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {SoftSkillComponent} from "../soft-skill/soft-skill.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DatasService} from "../services/datas.service";
import {SkillComponent} from "../skill/skill.component";
import {HardSkills} from "../models/HardSkills";
import {SoftSkill} from "../models/SoftSkill";
import {SkillsService} from "../services/skills.service";


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
    SkillComponent
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit{
  @Input() softSkillsList : SoftSkill[] = []
  @Input() languageSkills : HardSkills[] =[]
  @Input() frameworkList : HardSkills[] = []

  //Jauge de test
  levelChoices! : {option : string, purcent : number}[]
  index : number = 3

  //constructeur
  constructor(public datasService : DatasService, private skillService : SkillsService ) {}

  ngOnInit(): void {
    this.levelChoices = this.datasService.choice
    this.skillService.getSkills().subscribe((skills: any) => {
      console.log(skills)
      for (let skill of skills){
        if(skill.skillType === 'framework'){
          this.frameworkList.push(skill)
        }else if(skill.skillType === 'language'){
          this.languageSkills.push(skill)
        }else if(skill.skillType === 'softskill'){
          this.softSkillsList.push(skill)
        }
      }
    });
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
