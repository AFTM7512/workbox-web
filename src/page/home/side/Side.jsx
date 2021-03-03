import React, { useState, useEffect } from "react";
import styles from "./side.scss";
import { withRouter } from 'react-router-dom';


function Side(props) {
  const { pathname } = props.location;
  const [activeKey, setActiveKey] = useState();

  const menu = [
    {
      key: 'homePage',
      name: 'W',
    },
    {
      key: 'todo',
      name: 'ToDo',
      icon: '',
    },
    {
      key: 'plan',
      name: '计划',
      icon: '',
    },
  ];

  useEffect(() => {
    console.log(123);
    const aPath = pathname.split('/');
    if (aPath && aPath.length >= 2) setActiveKey(aPath[2]);
  }, [pathname]);


  // 修改选中
  function handleCheck(key) {
    if (activeKey !== key) {
      setActiveKey(key);
      props.history.push(`/home/${key}`);
    }
  }

  return (
    <div className={styles.side}>
      <ul className={styles['side__menu']}>
        {
          menu.map((item) => {
            return (
              <li
                key={item.key}
                className={`${styles['side__menu--item']} ${activeKey === item.key ? styles['side__menu-active'] : ''}`}
                onClick={() => handleCheck(item.key)}>
                <i className={`iconfont icon-vip ${styles['side__menu--item-icon']}`}></i>
                <span>{item.name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default withRouter(Side);

