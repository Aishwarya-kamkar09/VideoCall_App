const mongoose = require("mongoose")

const collaborationSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Collaboration", collaborationSchema)