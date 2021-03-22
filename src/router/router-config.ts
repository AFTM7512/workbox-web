
import IRouteItem from "./types";
import Home from "pages/home/Home";
import Todo from "pages/todo/Todo";
import Plan from "pages/plan/Plan";
import Doc from "pages/doc/Doc";

type IRouter = IRouteItem[]


const router: IRouter = [
  {
    key: '/',
    path: '/',
    component: Home,
    routes: [
      {
        key: 'todo',
        path: '/todo',
        component: Todo,
      },
      {
        key: 'plan',
        path: '/plan',
        component: Plan,
      },
      {
        key: 'doc',
        path: '/doc',
        component: Doc,
      }
    ]
  },
];

export default router;