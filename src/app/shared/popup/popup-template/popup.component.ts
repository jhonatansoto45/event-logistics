import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ButtonsPopup,
  OptionsCustom,
} from '../../../interfaces/popup.interace';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;

  container!: HTMLElement;
  options!: OptionsCustom;
  template!: TemplateRef<any>;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
    this.template = this.options.template;
  }

  ngAfterViewInit(): void {
    this.container = this.popupService.dimensionsPopup(
      this.modal.nativeElement,
      this.options
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy');

  }

  get buttons(): ButtonsPopup[] {
    return this.options.buttons || [];
  }

  /* CERRAR POPUP */
  closePopup(): void {
    this.onClose.emit(true);
  }
}
