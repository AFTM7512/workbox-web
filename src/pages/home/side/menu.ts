
interface IMenuItem {
  key: string,
  path: string,
  name: string,
}

const menu: IMenuItem[] = [
  {
    key: 'todo',
    path: '/todo',
    name: 'todo'
  },
  {
    key: 'plan',
    path: '/plan',
    name: 'plan'
  },
  {
    key: 'doc',
    path: '/doc',
    name: 'doc'
  },
];

export default menu;