import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class Modal {
  @Input() title!: string;
  @Output('close') closeUpdate = new EventEmitter<boolean>();

  public close(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.closeUpdate.emit(false);
  }
}
