import React, { createContext } from 'react';

import Side from "./side/Side.jsx";
import MainRouter from "../../router/MainRouter.jsx";
import styles from "./home.scss";

export default function Home(props) {
  const { history, location } = props;
  const HistoryContext = createContext(history);
  const LocationContext = createContext(location);
  return (
    <HistoryContext.Provider value={history}>
      <LocationContext.Provider value={location}>
        <div className={styles.home}>
          <div className={styles.home__side}>
            <Side />
          </div>
          <div className={styles.home__container}>
            <MainRouter />
          </div>
        </div>
      </LocationContext.Provider>
    </HistoryContext.Provider>
  );
}