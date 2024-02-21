export interface ICurrencyColumnsFields {
  id: string;
  price: number;
  amount: number;
  total: number;
}

export interface IActionColumnFileds {
  id: string;
  trigger: number;
  price: number;
  amount: number;
  side: 'BUY' | 'SELL';
  exp: string;
  status: string;
  action: boolean;
}

export type IDashboardRows<T> = {
  [key in keyof T]: T[key];
};
