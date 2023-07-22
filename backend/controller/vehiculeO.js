const Vehicule = require("../models/Vehicule");
// Create
exports.createVehicule = async (req, res, next) => {
  try {
    const { titre, description, categorie, marque, modele, annee } = req.body;

    const nouveauVehicule = new Vehicule({
      titre,
      description,
      categorie,
      marque,
      modele,
      annee,
    });

    await nouveauVehicule.save();
    res.status(201).json({ message: "Véhicule créé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la création du véhicule.",
    });
  }
};
// Allview
exports.getAllVehicule = (req, res, next) => {
  Vehicule.find()
    .then((vehicules) => res.status(200).json(vehicules))
    .catch((error) => res.status(400).json({ error }));
};
