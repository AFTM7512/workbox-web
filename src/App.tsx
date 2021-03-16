import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import RouterConfig from "router/router-config";
import RenderRouter from "router/RenderRouter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RenderRouter routes={RouterConfig} />
      </div>
    </Provider>
  );
}

export default App;
