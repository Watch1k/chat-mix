import React, { memo } from 'react'
import { Button, Form, Input, Space } from 'antd'
import { Store } from 'rc-field-form/es/interface'
// @ts-ignore
import FacebookLogin from 'react-facebook-login'
import { socket } from '../../server/socket'
import { SocketEvents } from '../../constants/SocketEvents'
import { useDispatch } from 'react-redux'
import { authActions } from '../../slices'
import styles from './Login.module.scss'
import { MongoAPI } from '../../api/MongoAPI'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
}

const Login = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const responseFacebook = (resp: any) => {
    dispatch(authActions.setUser({ name: resp.name }))
    socket.emit(SocketEvents.joinRoom, { name: resp.name })
  }

  const handleSignUp = async () => {
    const values = form.getFieldsValue()

    try {
      // @ts-ignore
      await MongoAPI.signup({ ...values })
    } catch (e) {
      console.log(e.response.data)
      return
    }

    form.submit()
  }

  const onSubmit = async (values: Store) => {
    try {
      // @ts-ignore
      await MongoAPI.login({ ...values })
    } catch (e) {
      console.log(e.response.data)
      return
    }

    dispatch(authActions.setUser({ ...values }))
    socket.emit(SocketEvents.joinRoom, { name: values.name })
  }

  return (
    <Space direction="vertical">
      <Form
        form={form}
        {...layout}
        style={{
          margin: '16px 0',
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input autoComplete="off" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input password' }]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>

          <Button
            onClick={handleSignUp}
            style={{ marginLeft: '10px' }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <FacebookLogin
        appId="673612439909226"
        fields="name,email,picture"
        scope="public_profile"
        callback={responseFacebook}
        cssClass={styles.fb}
        icon="fa-facebook"
      />
    </Space>
  )
}

export default memo(Login)
