import {Component, Input} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {Skill} from "../models/skill";
import {ModalService} from "../services/modal-service";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

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
  @Input() skill! : Skill
  constructor(private modalService : ModalService) {
  }
  openModal() {
    this.modalService.open();
  }


}
