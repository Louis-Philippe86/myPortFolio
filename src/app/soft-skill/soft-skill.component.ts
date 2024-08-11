import {Component, Input} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {ModalService} from "../services/modal-service";
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
export class SoftSkillComponent {
  @Input() skill! : SoftSkill
  constructor(private modalService : ModalService) {
  }
}
