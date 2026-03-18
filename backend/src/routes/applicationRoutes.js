const express = require("express")
const router = express.Router()

const auth = require("../middleware/authMiddleware")
const appController = require("../controllers/applicationController")

router.post("/apply", auth, appController.apply)

module.exports = router