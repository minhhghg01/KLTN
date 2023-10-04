import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import styles from './leftbar.module.css';

const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className={styles.sidebar}>
        <label>HHHH</label>
        <Button className={styles.sidebar_btn} onClick={onClick}> Thời Khóa Biểu</Button>
        <Button className={styles.sidebar_btn}> absa </Button>
    </div>
  );
};
export default Sidebar;