export interface ITableHeaders {
  id: string;
  field: string;
  key: string;
  label: string;
}

export interface ITableRows {
  [key: string]: string | boolean | number;
}

export interface ITableProps {
  rows: ITableRows[];
  headers: ITableHeaders[];
}
