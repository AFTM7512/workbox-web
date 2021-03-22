import React, { FC } from "react";
import RenderRouter from "router/RenderRouter";
import Side from "./side/Side";
import { IRouterConfig } from "./home-interface";
import styles from "./home.scss";

const Home: FC<IRouterConfig> = ({ routes }) => {
  console.log(111);

  return (
    <div className={ styles.home }>
      <div className={ styles.home__side }>
        <Side />
      </div>

      {/* 渲染子路由 */}
      <div className={ styles.home__content }>
        {
          routes && <RenderRouter routes={routes} />
        }
      </div>
    </div>
  );
};


export default Home;