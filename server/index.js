const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes');
const { users, userJoin, userLeave } = require('./utils/users')
const { formatMessage } = require('./utils/format')

const PORT = process.env.PORT || 8000
const botName = 'Bot'

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())
app.use(express.json())

const dbURI = 'mongodb+srv://admin:Fy0G5aiX9iA0llfZ@cluster0.nvnwg.mongodb.net/auth'
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((e) => console.log(e))

io.on('connection', socket => {
  socket
    .on('joinRoom', ({ name }) => {
      const user = userJoin(socket.id, name)
      socket.emit('message', formatMessage(botName, `Welcome to chat, ${user.name}!`))
      socket.broadcast.emit('message', formatMessage(botName, `${user.name} has joined the chat`))
      io.emit('users', users)
    })
    .on('disconnect', () => {
      const user = userLeave(socket.id)
      if (user) {
        io.emit('message', formatMessage(botName, `${user.name} left chat`))
      }
    })
    .on('chatMessage', ({ name, message }) => io.emit('message', formatMessage(name, message)))
})

app.use(authRoutes)
