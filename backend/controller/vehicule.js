const Vehicule = require("../models/Vehicule");

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
