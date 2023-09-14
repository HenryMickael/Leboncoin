const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const vehiculeCtrl = require("../controller/vehicule");
const auth = require("../middleware/auth");

router.post("/depotVehicule", multer, vehiculeCtrl.createVehicule);
router.get("/depotVehicule", multer, vehiculeCtrl.getAllVehicule);
router.get("/depotVehicule/:id", vehiculeCtrl.getOneVehicule);
// router.delete("/depotVehicule/:id", auth, vehiculeCtrl.deleteVehicule);

module.exports = router;
