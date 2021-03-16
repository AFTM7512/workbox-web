import React, { FC } from "react";
import RenderRouter from "router/RenderRouter";
import Side from "./side/Side";
import { IRouterConfig } from "./home-interface";
import { Button } from "antd";

const Home: FC<IRouterConfig> = ({ routes}) => {
  return (
    <div>
      <Side />

      {/* 渲染子路由 */}
      {
        routes && <RenderRouter routes={routes} />
      }
    </div>
  );
};


export default Home;