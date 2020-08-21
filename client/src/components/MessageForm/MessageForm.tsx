import React, { memo } from 'react'
import { Store } from 'rc-field-form/es/interface'
import { Form, Input, Button } from 'antd'
import { socket } from '../../server/socket'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/interfaces'

const { TextArea } = Input

const MessageForm = () => {
  const [form] = Form.useForm()
  const { name } = useSelector((state: IState) => state.auth.user)

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      form.submit()
    }
  }

  const onSubmit = ({ message }: Store) => {
    socket.emit('chatMessage', { name, message })
    form.setFieldsValue({ message: '' })
  }

  return (
    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
      <Form
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item name="message">
          <TextArea
            autoSize={{ minRows: 2, maxRows: 6 }}
            maxLength={1000}
            placeholder="Type message"
            onKeyPress={onKeyPress}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            htmlType="submit"
          >Send</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(MessageForm)
