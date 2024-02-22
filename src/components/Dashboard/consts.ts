import type { ITableHeaders } from '@/components/common/Table/types';
import type { IActionColumnFileds, ICurrencyColumnsFields, IDashboardRows } from './types';
import type { ISlideSelectModelValue } from '../common/SlideSelect/types';

export const actionsDashboardMockedHeaders: ITableHeaders[] = [
  {
    id: '1',
    field: 'trigger',
    key: 'trigger',
    label: 'TRIGGER',
    align: 'start',
    alignRows: 'start',
    width: '2fr',
  },
  {
    id: '2',
    field: 'price',
    key: 'price',
    label: 'PRICE',
    align: 'start',
    alignRows: 'start',
    width: '1fr',
  },
  {
    id: '3',
    field: 'amount',
    key: 'amount',
    label: 'AMOUNT',
    align: 'end',
    alignRows: 'end',
    width: '2fr',
  },
  {
    id: '4',
    field: 'side',
    key: 'side',
    label: 'SIDE',
    align: 'start',
    alignRows: 'start',
    width: '1fr',
  },
  {
    id: '5',
    field: 'exp',
    key: 'exp',
    label: 'EXP',
    align: 'start',
    alignRows: 'start',
    width: '1.5fr',
  },
  {
    id: '6',
    field: 'status',
    key: 'status',
    label: 'STAT',
    align: 'start',
    alignRows: 'start',
    width: '1fr',
  },
  {
    id: '7',
    field: 'action',
    key: 'action',
    label: '',
    align: 'start',
    alignRows: 'start',
    width: '25px',
  },
];

export const actionsDashboardMockedData: IDashboardRows<IActionColumnFileds>[] = [
  {
    id: '1',
    trigger: 0.0032,
    price: 1.00121,
    amount: 10211.37,
    side: 'BUY',
    exp: '1D 5H',
    status: 'NEW',
    action: true,
  },
  {
    id: '2',
    trigger: 0.0001,
    price: 75.5,
    amount: 2000000,
    side: 'SELL',
    exp: '3D 12H',
    status: 'NEW',
    action: true,
  },
  {
    id: '3',
    trigger: 0.00003,
    price: 120,
    amount: 5000000,
    side: 'BUY',
    exp: '8D 2H',
    status: 'NEW',
    action: true,
  },
  {
    id: '4',
    trigger: 0.0005,
    price: 18.75,
    amount: 1500,
    side: 'SELL',
    exp: '2D 20H',
    status: 'NEW',
    action: true,
  },
  {
    id: '5',
    trigger: 0.00008,
    price: 40.2,
    amount: 900,
    side: 'BUY',
    exp: '4D 6H',
    status: 'NEW',
    action: false,
  },
];

export const currencyDashboardMcokedHeaders: ITableHeaders[] = [
  {
    id: '1',
    field: 'price',
    key: 'price',
    label: 'PRICE',
    align: 'start',
    alignRows: 'start',
  },
  {
    id: '2',
    field: 'amount',
    key: 'amount',
    label: 'AMOUNT',
    align: 'end',
  },
  {
    id: '3',
    field: 'total',
    key: 'total',
    label: 'TOTAL',
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
    total: 89919232,
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

export const tokenSlideSelectOptions: ISlideSelectModelValue[] = [
  { id: '1', label: 'BTC' },
  { id: '2', label: 'SFT' },
];

export const orderTypeSlideSelectOptions: ISlideSelectModelValue[] = [
  { id: '1', label: 'Market' },
  { id: '2', label: 'Limit' },
  { id: '3', label: 'TWAP' },
];
