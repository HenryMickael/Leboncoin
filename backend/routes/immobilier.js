const express = require("express");
const router = express.Router();
const immobilierController = require("../controller/immobilier");

router.post("/depotImmobilier", immobilierController.createImmobilier);

module.exports = router;
