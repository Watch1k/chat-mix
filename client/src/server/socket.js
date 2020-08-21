import io from 'socket.io-client'

// const ENDPOINT = 'https://chat-mix-server.herokuapp.com'
export const ENDPOINT = 'http://localhost:8000'

export const socket = io(ENDPOINT)
