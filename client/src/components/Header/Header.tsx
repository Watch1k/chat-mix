import React, { memo } from 'react'
import { Layout, Typography } from 'antd'

const { Title } = Typography

const Header = () => (
  <Layout.Header
    style={{
      background: '#fff',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Title level={3}>Chat Mix</Title>
  </Layout.Header>
)

export default memo(Header)
