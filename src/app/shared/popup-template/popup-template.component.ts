import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-popup-template',
  templateUrl: './popup-template.component.html',
  styleUrls: ['./popup-template.component.scss'],
})
export class PopupTemplateComponent {
  @Input() template!: TemplateRef<any>;

  popupActive: boolean = false;

  @Output() onSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  savePopup(): void {
    this.popupActive = true;
    setTimeout(() => {
      this.onSave.emit(true);
    }, 600);
  }

  closePopup(): void {
    this.popupActive = true;
    setTimeout(() => {
      this.onClose.emit(true);
    }, 600);
  }
}
