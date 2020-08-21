const users = []

const userJoin = (id, name) => {
  const user = { id, name }
  users.push(user)
  return user
}

const getUser = (id) => users.find((user) => user.id === id)

const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    const user = users[index]
    users.splice(index, 1)
    return user
  }

  return null
}

module.exports = {
  users,
  userJoin,
  getUser,
  userLeave,
}
