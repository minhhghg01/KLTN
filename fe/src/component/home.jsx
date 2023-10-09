import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TkbComponent from './tkb';
import { useNavigate } from "react-router-dom";
import Default from '../layout/Default';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = ["TKB", "bds", "sas"].map((item, index) => {
  const key = String(index + 1);
  return {
    key: `/sub${key}`,
    icon: React.createElement(item),
    label: ` ${item}`,
    children: ["TKB", "điểm danh", "học phí" ].map((child) =>{
      if(item==="TKB"){
      return {
        key: `/${child}`,
        label: ` ${child}`,
      }}
    })
    
  };
});
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
        {/* <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#f5f5f5',
            height: '95vh',
          }}
        >
          
        </Content> */}
        <TkbComponent />
    </Default>
  );
};
export default App;