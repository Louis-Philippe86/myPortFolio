import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ModalService} from "../services/modal-service";


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() content! : string
  @Input() title! : string
  isVisible = false;


  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.modalVisibilityChange.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  closeModal() {
    this.modalService.close();
  }
}
