export interface ColumnsPrimeNg {
  field: string;
  title: string;
  sortable?: boolean;
  width?: string;
}

export interface AttributeInputFilter {
  placeholder?: string;
  field: string;
  type: 'text' | 'number';
}

export interface ItemAttributeEvent {
  image: string;
  title: string;
  description: string;
}
