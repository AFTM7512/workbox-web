
interface IMenuItem {
  key: string,
  path: string,
  name: string,
}

const menu: IMenuItem[] = [
  {
    key: 'to',
    path: '/to',
    name: 'To'
  },
  {
    key: 'do',
    path: '/do',
    name: 'Do'
  },
  {
    key: 'plan',
    path: '/plan',
    name: 'Plan'
  },
];

export default menu;