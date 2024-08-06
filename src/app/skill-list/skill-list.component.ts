import { Component, Input, OnInit} from '@angular/core';
import {Skill} from "../models/skill";
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {SoftSkillComponent} from "../soft-skill/soft-skill.component";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DatasService} from "../services/datas.service";
import {HardSkillsService} from "../services/hardSkills.service";
import {HardSkillComponent} from "../hard-skill/hard-skill.component";
import {HardSkills} from "../models/HardSkills";
import {Observable} from "rxjs";


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
  @Input() softSkillsList! : Skill[]
  @Input() languageSkills : HardSkills[] =[]
  @Input() frameworkList : HardSkills[] = []
  levelChoices! : {option : string, purcent : number}[]
  index : number = 3

  constructor(public datasService : DatasService,private hardSkillService : HardSkillsService ) {}

  ngOnInit(): void {
    this.levelChoices = this.datasService.choice
    this.hardSkillService.getHardSkills().subscribe((hardskills: any) => {
        // this.hardskillsList = hardskills; // Utilisez les données reçues
      for (let hardskill of hardskills){

        if(hardskill.framwork){
          this.frameworkList.push(hardskill)
        }else{
          this.languageSkills.push(hardskill)
        }
      }
      console.log(hardskills)
    });
    //
    this.softSkillsList = this.datasService.getSoftSkillsList()
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
