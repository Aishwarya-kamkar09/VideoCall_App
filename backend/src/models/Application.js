const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({
  collaborationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collaboration"
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    default: "pending"
  }
})

module.exports = mongoose.model("Application", applicationSchema)