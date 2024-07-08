import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, CheckOutlined, LoadingOutlined, AppstoreAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {Outlet, Link } from "react-router-dom"
import "./Backoffice.css";
import Logo from "../../Photos/Logo.png";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className='siderAdmin' style={{ height: '100vh', position: 'fixed', left: 0 }}>
        <div className="demo-logo-vertical" />
        <img src={Logo} width={"90%"} alt="Logo" />
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<CheckOutlined />} >
              <Link to="Artisans" className="Artisans">Artisans</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LoadingOutlined />} >
              <Link to="/">Pending Schools</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreAddOutlined />} >
              <Link to="CreateSchoolAdmin" className='CreateSchool'>Add School</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} >
              <Link to="../admin">Logout</Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed',
            width: '100%',
            zIndex: 1,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='layout-content-inner' style={{background: colorBgContainer,borderRadius: borderRadiusLG,}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
