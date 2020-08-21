import React, { memo, useEffect, useState } from 'react'
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import './MessageList.css'
import { socket } from '../../server/socket'
import { nanoid } from 'nanoid'

const MessageList = () => {
  const [messages, setMessages] = useState<{ name: string, message: string, time: string }[]>([])

  useEffect(() => {
    socket.on('message', (data: { name: string, message: string, time: string }) => {
      setMessages((prevItems) => ([
        ...prevItems,
        data,
      ]))
    })
  }, [])

  return (
    <ScrollToBottom
      className="scroll"
      followButtonClassName="hide"
    >
      {messages.map((message) => (
        <Message
          data={message}
          key={nanoid()}
        />
      ))}
    </ScrollToBottom>
  )
}

export default memo(MessageList)
