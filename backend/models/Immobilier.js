const mongoose = require("mongoose");

const immobilierSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  surface: { type: Number, required: true },
  localisation: { type: String, required: true },
});

const Immobilier = mongoose.model("Immobilier", immobilierSchema);
module.exports = Immobilier;
