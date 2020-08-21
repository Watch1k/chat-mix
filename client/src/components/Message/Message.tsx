import React, { memo } from 'react'
import { IMessage } from '../../interfaces/interfaces'

interface IProps {
  data: IMessage
}

const Message = (props: IProps) => {
  const { name, message, time } = props.data

  return (
    <div
      style={{
        border: '1px solid #eee', borderRadius: 4, textAlign: 'left', padding: 12, marginBottom: 24,
      }}
    >
      <div>{message}</div>
      <div>{name}</div>
      <small>{time}</small>
    </div>
  )
}

export default memo(Message)
