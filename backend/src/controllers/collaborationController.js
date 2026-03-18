const Collaboration = require("../models/Collaboration")
exports.createCollaboration = async (req, res) => {
  try {
    const collab = new Collaboration({
      ...req.body,
      createdBy: req.user.id
    })
    await collab.save()
    res.json(collab)
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.getCollaborations = async (req, res) => {
  const collabs = await Collaboration.find().populate("createdBy")
  res.json(collabs)
}