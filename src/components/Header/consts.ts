import ColumnChartIcon from '@/assets/icons/Header/ColumnChartIcon.vue';
import DollarCircleIcon from '@/assets/icons/Header/DollarCircleIcon.vue';
import GearIcon from '@/assets/icons/Header/GearIcon.vue';
import Grid02Icon from '@/assets/icons/Header/Grid02Icon.vue';
import GridIcon from '@/assets/icons/Header/GridIcon.vue';
import LockOpenedIcon from '@/assets/icons/Header/LockOpenedIcon.vue';
import PieChartIcon from '@/assets/icons/Header/PieChartIcon.vue';
import SliderIcon from '@/assets/icons/Header/SliderIcon.vue';
import TransformIcon from '@/assets/icons/Header/TransformIcon.vue';
import TrendUpIcon from '@/assets/icons/Header/TrendUpIcon.vue';
import type { IProfileModel } from './types';
import HomeIcon from '@/assets/icons/Footer/HomeIcon.vue';
import MarketsIcon from '@/assets/icons/Footer/MarketsIcon.vue';
import TradIcon from '@/assets/icons/Footer/TradIcon.vue';
import ActivesIcon from '@/assets/icons/Footer/ActivesIcon.vue';
import ProfileIcon from '@/assets/icons/Footer/ProfileIcon.vue';

export const headerNavigationLinks = [
  {
    component: ColumnChartIcon,
    route: '/login',
    id: 1,
  },
  {
    component: PieChartIcon,
    route: '/',
    id: 2,
  },
  {
    component: GearIcon,
    route: '/',
    id: 3,
  },
  {
    component: GridIcon,
    route: '/',
    id: 4,
  },
  {
    component: Grid02Icon,
    route: '/',
    id: 5,
  },
  {
    component: SliderIcon,
    route: '/',
    id: 6,
  },
  {
    component: TrendUpIcon,
    route: '/',
    id: 7,
  },
  {
    component: TransformIcon,
    route: '/',
    id: 8,
  },
  {
    component: LockOpenedIcon,
    route: '/',
    id: 9,
  },
  {
    component: DollarCircleIcon,
    route: '/',
    id: 10,
  },
];

export const profileMockedData: IProfileModel = {
  name: 'John Doe',
  balance: 593831394.24,
};

export const footerNavigationLinks = [
  {
    component: HomeIcon,
    route: '/',
    id: 1,
  },
  {
    component: MarketsIcon,
    route: '/',
    id: 2,
  },
  {
    component: TradIcon,
    route: '/',
    id: 3,
  },
  {
    component: ActivesIcon,
    route: '/',
    id: 4,
  },
  {
    component: ProfileIcon,
    route: '/',
    id: 5,
  },
];
