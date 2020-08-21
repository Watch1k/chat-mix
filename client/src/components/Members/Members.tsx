import React, { memo, useEffect, useState } from 'react'
import { Layout, Menu, Typography } from 'antd'
import { socket } from '../../server/socket'

const { Sider } = Layout
const { Title } = Typography

interface IUser {
  id: string;
  name: string;
}

const Members = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    socket.on('users', (data: IUser[]) => {
      setUsers(data)
    })
  }, [])

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        right: 0,
      }}
    >
      <Title
        level={4}
        style={{ margin: '10px 24px', color: '#fff' }}
      >Members</Title>
      <Menu
        theme="dark"
        mode="inline"
        selectable={false}
      >
        {users.map((user) => (
          <Menu.Item key="1">
            <span className="nav-text">{user.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
export default memo(Members)
