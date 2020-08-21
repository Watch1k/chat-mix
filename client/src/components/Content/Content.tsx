import React, { memo } from 'react'
import { Layout } from 'antd'
import MessageForm from '../MessageForm/MessageForm'
import MessageList from '../MessageList/MessageList'

const Content = () => (
  <>
    <Layout.Content
      style={{
        margin: '24px 16px 0',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MessageList />
      <MessageForm />
    </Layout.Content>
  </>
)

export default memo(Content)
