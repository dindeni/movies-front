import { MenuData } from './types';

const menuData: MenuData = [
  {
    name: 'Trending',
    value: 'trending',
    subItems: [
      {
        name: 'Daily',
        value: 'dailyTrending',
        link: 'daily-trending',
      },
      {
        name: 'Weekly',
        value: 'weeklyTrending',
        link: 'weekly-trending',
      },
    ],
  },
];

export { menuData };
