import io from 'socket.io-client'

export const ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://chat-mix-server.herokuapp.com'
  : 'http://localhost:8000'

export const socket = io(ENDPOINT)
