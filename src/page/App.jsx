import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Home from "../page/home/Home.jsx";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Route path="/home" component={Home} />
      </Router>
    </ConfigProvider>
  );
}

export default App;
