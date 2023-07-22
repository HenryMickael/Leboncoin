const express = require("express");
const router = express.Router();
const vehiculeCtrl = require("../controller/vehicule");

router.post("/depotVehicule", vehiculeCtrl.createVehicule);
router.get("/depotVehicule", vehiculeCtrl.getAllVehicule);
router.get("/depotVehicule/:id", vehiculeCtrl.getOneVehicule);

module.exports = router;
