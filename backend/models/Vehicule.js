const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  marque: { type: String, required: true },
  modele: { type: String, required: true },
  annee: { type: Number, required: true },
});

const Vehicule = mongoose.model("Vehicule", vehiculeSchema);
module.exports = Vehicule;
