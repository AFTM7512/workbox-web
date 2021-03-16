import React, { FC, useState, useEffect } from "react";
import menu from "./menu";
import styles from "./side.scss";

const Side: FC = () => {
  const [activeKey, setActiveKey] = useState(menu[0].key);

  return (
    <div className={ styles.side }>
      <div className={ styles.side__logo }>W</div>
      <ul className={ styles.side__nav }>
        {
          menu.map(({ key, name }) => (
            <li key={ key } className={ `${ styles['side__nav--item'] } ${ activeKey === key ? styles['side__nav-active'] : null }` }>
              <i className="iconfont icon-vip"></i>
              <span>{ name }</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Side;