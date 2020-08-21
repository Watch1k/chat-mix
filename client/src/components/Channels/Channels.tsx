import React, { memo } from 'react'
import { Layout, Menu, Typography } from 'antd'

const { Sider } = Layout
const { Title } = Typography

const Channels = () => (
  <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
    }}
  >
    <Title
      level={4}
      style={{ margin: '10px 24px', color: '#fff' }}
    >Channels</Title>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        <span className="nav-text">nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span className="nav-text">nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <span className="nav-text">nav 3</span>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default memo(Channels)
