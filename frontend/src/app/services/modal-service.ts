import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibility = new Subject<boolean>();
  modalVisibilityChange = this.modalVisibility.asObservable();

  constructor() { }

  open() {
    this.modalVisibility.next(true);
  }

  close() {
    this.modalVisibility.next(false);
  }
}
