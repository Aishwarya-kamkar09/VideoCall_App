const Application = require("../models/Application")

exports.apply = async (req, res) => {
  const { collaborationId } = req.body
  try {
    const application = new Application({
      collaborationId,
      creatorId: req.user.id
    })
    await application.save()
    res.json({ msg: "Applied successfully" })
  } catch (error) {
    res.status(500).json(error)
  }
}