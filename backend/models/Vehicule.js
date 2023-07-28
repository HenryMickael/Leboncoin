const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  userId: { type: String },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  marque: { type: String },
  modele: { type: String },
  annee: { type: Number },
  boiteDeVitesse: { type: String },
  carburant: { type: String },
  couleur: { type: String },
  prixEnEuro: { type: Number },
  emailDeContact: { type: String },
  numeroDeTelDeContact: { type: String },
  dateCreation: { type: Date, default: Date.now },
  imageUrl: { type: String },
});

const Vehicule = mongoose.model("Vehicule", vehiculeSchema);
module.exports = Vehicule;
