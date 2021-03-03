import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import MainRouter from "../router/MainRouter.jsx";

function App() {
  return (
    <ConfigProvider locale={ zhCN }>
      <Router>
        <MainRouter />
      </Router>
    </ConfigProvider>
  );
}

export default App;
