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

export default function MainRouter() {
  return (
    <div id="root">
      <Router>
        <Switch>
          <Route path="/home" exact component={HomePage}></Route>
          <Redirect exact to="/home" />
        </Switch>
      </Router>
    </div>
  );
}