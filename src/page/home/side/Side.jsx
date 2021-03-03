import React, { useState, useEffect } from "react";
import styles from "./side.scss";
import { withRouter } from 'react-router-dom';

function Side() {
  const [activeKey, setActiveKey] = useState('workbox');

  const menu = [
    {
      key: 'workbox',
      name: 'W',
    },
    {
      key: 'inspiration',
      name: '灵感',
      icon: '',
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
    initData();
  }, []);

  function initData() {

  }

  // 修改选中
  function handleCheck(key) {
    if (activeKey !== key) {
      setActiveKey(key);
    }
  }

  return (
    <div className={ styles.side }>
      <ul className={ styles['side__menu'] }>
        {
          menu.map((item, index) => {
            if (index === 0) {
              return (
                <li
                  key={ item.key }
                  className={ `${styles['side__menu--item']} ${ activeKey === item.key ? styles['side__menu-active'] : '' }` }
                  onClick={ () => handleCheck(item.key) }>
                  <span>{ item.name }</span>
                </li>
              );
            } else {
              return (
                <li
                  key={ item.key }
                  className={ `${styles['side__menu--item']} ${ activeKey === item.key ? styles['side__menu-active'] : '' }` }
                  onClick={ () => handleCheck(item.key) }>
                  <i className={ `iconfont icon-vip ${ styles['side__menu--item-icon'] }`}></i>
                  <span>{ item.name }</span>
                </li>
              );
            }
          })
        }
      </ul>
    </div>
  );
}

export default withRouter(Side);

