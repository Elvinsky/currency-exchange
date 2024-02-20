export interface ICurrencyColumnsFields {
  id: string;
  price: number;
  amount: number;
  total: number;
}

export type IDashboardRows<T> = {
  [key in keyof T]: T[key];
};
