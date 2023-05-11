import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import Swal from 'sweetalert2';

import { PopupComponent } from '../popup-template/popup.component';
import { OptionsCustom } from '../../../interfaces/popup.interace';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  component!: ComponentRef<PopupComponent>;

  constructor() {}

  /**
   * Inicia el componente dinámico
   * @param vfc  ViewContainerRef
   * @param options  OptionsCustom
   */
  componentRef(vfc: ViewContainerRef, options: OptionsCustom) {
    if (vfc) vfc.clear();

    this.component = vfc.createComponent(PopupComponent);
    this.component.instance.options = options;

    const sub0 = this.component.instance.onClose
      .asObservable()
      .subscribe((close) => {
        if (close) {
          sub0.unsubscribe();
          this.component.destroy();
        }
      });
  }

  /* RELACIONADO CON EL COMPONENTE */
  dimensionsPopup(container: HTMLElement, options: OptionsCustom): HTMLElement {
    container.style.width = options.width ? options.width : '500px';
    container.style.height = options.height ? options.height : '500px';
    return container;
  }

  /* CIERRE DE POPUP */
  closePopup(): void {
    if (!this.component) return;

    this.component.destroy();
  }

  /* POPUP */
  openWarning(title?: string): void {
    Swal.fire({
      icon: 'warning',
      title: title || 'Warning',
    });
  }
}
