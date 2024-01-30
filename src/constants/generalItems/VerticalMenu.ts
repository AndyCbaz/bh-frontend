import {
  faCalendar,
  faChartPie,
  faCircleUser,
  faHandHoldingDollar,
  faQuestion,
  faWallet,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';



export const itemsVerticalMenu = [
  { title: 'Schedule / Calendar', path: '/app/schedule-calendar', icon: faCalendar },
  { title: 'Statistic', path: '/app/stadistic', icon: faChartPie },
  { title: 'Earnings', path: '/app/earnings', icon: faHandHoldingDollar },
  { title: 'Wallet', path: '/app/wallet', icon: faWallet },
  { title: 'Profile', path: '/app/profile', icon: faCircleUser },
  { title: 'Settings', path: '/app/settings', icon: faWrench },
  { title: 'Help / Chat', path: '/app/help-chat', icon: faQuestion },
];
