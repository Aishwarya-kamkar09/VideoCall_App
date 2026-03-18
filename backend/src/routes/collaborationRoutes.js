const express = require("express")
const router = express.Router()

const auth = require("../middleware/authMiddleware")
const collabController = require("../controllers/collaborationController")

router.post("/create", auth, collabController.createCollaboration)

router.get("/", collabController.getCollaborations)

module.exports = router