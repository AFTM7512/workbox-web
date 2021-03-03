import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../page/home/Home.jsx";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/home" exact component={ Home }></Route>
      <Redirect exact to="/home/homePage" />
    </Switch>
  );
}