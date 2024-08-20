import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SoftSkill} from "../models/SoftSkill";

@Component({
  selector: 'app-soft-skill',
  standalone: true,
    imports: [
      RouterOutlet,
      ModalComponent,
      CommonModule,
      SharedModule
    ],
  templateUrl: './soft-skill.component.html',
  styleUrl: './soft-skill.component.css'
})
export class SoftSkillComponent implements OnInit{
  @Input() skill! : SoftSkill
  truncateLength!: number;

  ngOnInit(): void {
    if(window.innerWidth <= 500){
      this.truncateLength = 40;
    }else{
        this.truncateLength = 80;
    }
  }


}
