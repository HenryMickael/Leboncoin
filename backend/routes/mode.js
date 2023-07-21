const express = require("express");
const router = express.Router();
const modeController = require("../controller/mode");

router.post("/depotMode", modeController.createMode);

module.exports = router;
