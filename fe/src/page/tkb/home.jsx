import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TkbComponent from './tkb';
import { useNavigate } from "react-router-dom";
import Default from '../../layout/Default';
import qlgv from '../QLGV/QLGV';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e.key);
    navigate(e.key);
  };

  return (
    <Default>
        <TkbComponent />
    </Default>
  );
};
export default App;