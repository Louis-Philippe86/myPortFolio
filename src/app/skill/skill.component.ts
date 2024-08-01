import {Component, Input} from '@angular/core';
import {ModalComponent} from "../modals/modal.component";
import {SharedModule} from "../shared/shared.module";
import {Skill} from "../models/skill";
import {ModalService} from "../services/modal-service";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-skill',
  standalone: true,
    imports: [
      RouterOutlet,
      ModalComponent,
      CommonModule,
      SharedModule
    ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() skill! : Skill
  constructor(private modalService : ModalService) {
  }
  openModal() {
    this.modalService.open();
  }


}
