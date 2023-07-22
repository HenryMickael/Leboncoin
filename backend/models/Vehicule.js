const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  marque: { type: String, required: true },
  modele: { type: String, required: true },
  annee: { type: Number, required: true },
  boiteDeVitesse: { type: String, required: true },
  carburant: { type: String, required: true },
  couleur: { type: String, required: true },
  prixEnEuro: { type: Number, required: true },
  emailDeContact: { type: String },
  numeroDeTelDeContact: { type: String },
  dateCreation: { type: Date, default: Date.now },
});

const Vehicule = mongoose.model("Vehicule", vehiculeSchema);
module.exports = Vehicule;
