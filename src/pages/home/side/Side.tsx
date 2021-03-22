import React, { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import menu from "./menu";
import styles from "./side.scss";

const Side: FC = () => {
  const [activeKey, setActiveKey] = useState(menu[0].key);
  const history = useHistory();

  useEffect(() => {
    const pathname = history.location.pathname.replace('/', '');
    if (pathname !== activeKey) {
      setActiveKey(pathname);
    }
  }, []);

  function handleChange(key: string = 'to') {
    if (activeKey === key) return;
    setActiveKey(key);
    history.push(`/${key}`);
  }

  return (
    <div className={ styles.side }>
      <div className={ styles.side__logo }>W</div>
      <ul className={ styles.side__nav }>
        {
          menu.map(({ key, name }) => (
            <li key={ key }
              onClick={ () => handleChange(key) }
              className={ `${ styles['side__nav--item'] } ${ activeKey === key ? styles['side__nav-active'] : null }` }>
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