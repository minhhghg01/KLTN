import React from 'react';
import Navbar from './navbar';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TkbComponent from './tkb';
import { useNavigate } from "react-router-dom";
  

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `/sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: `/sub${subKey}`,
        label: `option${subKey}`,
      };
    }),
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
    <Layout>
      <Navbar />
      <Layout>
        <Sider
        width={200}
        height={'100%'}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
          onClick={onClick}
        />
      </Sider>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#f5f5f5',
            height: '95vh',
          }}
        >
          <TkbComponent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;