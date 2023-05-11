import { TemplateRef } from '@angular/core';

export interface OptionsCustom {
  template: TemplateRef<any>;
  title?: string;
  width: string;
  height: string;
  buttons?: ButtonsPopup[];
}

export interface ButtonsPopup {
  icon?: string;
  tooltip?: string;
  click?: () => void;
  close?: () => void;
}
