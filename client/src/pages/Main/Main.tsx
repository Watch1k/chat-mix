import React, { memo } from 'react'
import Channels from '../../components/Channels/Channels'
import { Layout } from 'antd'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import Members from '../../components/Members/Members'

const Main = () => (
  <>
    <Channels />
    <Layout
      style={{
        margin: '0 200px',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />
      <Content />
      <Footer />
    </Layout>
    <Members />
  </>
)

export default memo(Main)
