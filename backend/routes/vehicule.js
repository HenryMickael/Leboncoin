const express = require("express");
const router = express.Router();
const vehiculeCtrl = require("../controller/vehicule");

router.post("/depotVehicule", vehiculeCtrl.createVehicule);

module.exports = router;
