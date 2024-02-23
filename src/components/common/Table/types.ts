export interface ITableHeaders {
  id: string;
  field: string;
  key: string;
  label: string;
  align?: 'center' | 'end' | 'start' | 'justify';
  alignRows?: 'center' | 'end' | 'start' | 'justify';
  width?: string;
}

export interface ITableRows {
  [key: string]: string | boolean | number;
}

export interface ITableProps {
  rows: ITableRows[];
  headers: ITableHeaders[];
  maxHeight?: string;
  lined?: boolean;
}
