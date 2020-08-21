const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, 'Name must be unique'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
})

userSchema.statics.login = async function ({ name, password }) {
  const user = await this.findOne({ name })

  if (user) {
    if (user.password === password) {
      return user
    }
    throw Error('incorrect password')
  }
  throw Error('incorrect name')
}

const User = mongoose.model('user', userSchema)

module.exports = User
