import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ModalConfig {
  title: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() config: ModalConfig;
  @Output() closeModal = new EventEmitter();

  onCloseModal() {
    this.closeModal.emit();
  }
}
