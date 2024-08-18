import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../shared/shared.module";
import {ModalComponent} from "../modals/modal.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ModalComponent
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit{
  ngOnInit(): void {
  }


}
