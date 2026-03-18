const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    })
    await user.save()
    res.json({ msg: "User registered" })
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ msg: "User not found" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password" })
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )
    res.json({ token })
  } catch (error) {
    res.status(500).json(error)
  }
}