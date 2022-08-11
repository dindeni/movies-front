import { MenuData } from './types';

const menuData: MenuData = [
  {
    name: 'Trending',
    value: 'trending',
    subItems: [
      {
        name: 'Daily',
        value: 'dailyTrending',
        link: '/trending/daily',
      },
      {
        name: 'Weekly',
        value: 'weeklyTrending',
        link: '/trending/weekly',
      },
    ],
  },
];

export { menuData };
