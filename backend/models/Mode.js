const mongoose = require("mongoose");

const modeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  taille: { type: String, required: true },
  couleur: { type: String, required: true },
});

const Mode = mongoose.model("Mode", modeSchema);
module.exports = Mode;
