import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AsyncComponents from "../components/async-components/AsyncComponents.jsx";

// 导入组件
const HomePage = AsyncComponents(() => import('../page/home/Home.jsx'));
const AboutPage = AsyncComponents(() => import('../page/about/About.jsx'));
// const CustomerPage = AsyncComponents(() => import('../page/customer/Customer.jsx'));
const CustomerPage = AsyncComponents(() => import('./CustomerRouter.jsx'));

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={HomePage}></Route>
        <Route path="/about" exact component={AboutPage} ></Route>
        <Route path="/customer" component={CustomerPage} ></Route>
        <Redirect exact to="/home" from="/" />
      </Switch>
    </Router>
  );
}