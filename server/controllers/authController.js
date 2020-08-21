const User = require('../models/User')

const getError = (err) => ({ ...err, message: err.message })

module.exports.signup_post = async (req, res) => {
  const { name, password } = req.body

  try {
    const user = await User.create({ name, password })
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json(getError(err));
  }
}

module.exports.login_post = async (req, res) => {
  const { name, password } = req.body

  try {
    const user = await User.login({ name, password })
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json(getError(err))
  }

}
