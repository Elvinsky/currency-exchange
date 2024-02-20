import type { ITableHeaders } from '@/components/common/Table/types';
import type { ICurrencyColumnsFields, IDashboardRows } from './types';

export const currencyDashboardMcokedHeaders: ITableHeaders[] = [
  {
    id: '1',
    field: 'price',
    key: 'price',
    label: 'Price',
    align: 'start',
    alignRows: 'start',
  },
  {
    id: '2',
    field: 'amount',
    key: 'amount',
    label: 'Amount',
    align: 'end',
  },
  {
    id: '3',
    field: 'total',
    key: 'total',
    label: 'Total',
    align: 'end',
  },
];

export const currencyDashboardMockedData: IDashboardRows<ICurrencyColumnsFields>[] = [
  {
    id: '1',
    price: 1.0014,
    amount: 111,
    total: 111463,
  },
  {
    id: '2',
    price: 1.0013,
    amount: 670645,
    total: 587809123,
  },
  {
    id: '3',
    price: 1.0012,
    amount: 8812032,
    total: 8889919232,
  },
  {
    id: '4',
    price: 1.0011,
    amount: 367256,
    total: 8994234,
  },
  {
    id: '5',
    price: 1.001,
    amount: 23422,
    total: 78901234,
  },
  {
    id: '6',
    price: 1.0009,
    amount: 986734,
    total: 45678901,
  },
  {
    id: '7',
    price: 1.0008,
    amount: 23458,
    total: 45328934,
  },
  {
    id: '8',
    price: 1.0007,
    amount: 675432,
    total: 67890123,
  },
  {
    id: '9',
    price: 1.0006,
    amount: 456789,
    total: 78901234,
  },
  {
    id: '10',
    price: 1.0005,
    amount: 8765432,
    total: 56789012,
  },
  {
    id: '11',
    price: 1.0004,
    amount: 12345,
    total: 12345678,
  },
  {
    id: '12',
    price: 1.0003,
    amount: 54321,
    total: 87654321,
  },
  {
    id: '13',
    price: 1.0002,
    amount: 987654,
    total: 23456789,
  },
  {
    id: '14',
    price: 1.0001,
    amount: 123456,
    total: 90123456,
  },
  {
    id: '15',
    price: 1.0,
    amount: 789012,
    total: 34567890,
  },
  {
    id: '16',
    price: 0.9999,
    amount: 234567,
    total: 23456789,
  },
  {
    id: '17',
    price: 0.9998,
    amount: 87654,
    total: 78901234,
  },
  {
    id: '18',
    price: 0.9997,
    amount: 1234567,
    total: 56789012,
  },
  {
    id: '19',
    price: 0.9996,
    amount: 345678,
    total: 45678901,
  },
  {
    id: '20',
    price: 0.9995,
    amount: 9876543,
    total: 78901234,
  },
];
