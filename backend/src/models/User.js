const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["creator", "startup"] },
  niche: String,
  followers: Number,
  bio: String
})

module.exports = mongoose.model("User", userSchema)