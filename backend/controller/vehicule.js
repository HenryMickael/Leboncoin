const Vehicule = require("../models/Vehicule");

exports.createVehicule = async (req, res, next) => {
  try {
    const {
      titre,
      description,
      categorie,
      marque,
      modele,
      annee,
      boiteDeVitesse,
      carburant,
      couleur,
      prixEnEuro,
      emailDeContact,
      numeroDeTelDeContact,
    } = req.body;

    const nouveauVehicule = new Vehicule({
      titre,
      description,
      categorie,
      marque,
      modele,
      annee,
      boiteDeVitesse,
      carburant,
      couleur,
      prixEnEuro,
      emailDeContact,
      numeroDeTelDeContact,
      dateCreation: Date.now(),
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
// Oneview
exports.getOneVehicule = (req, res, next) => {
  Vehicule.findById(req.params.id)
    .then((vehicule) => {
      if (!vehicule) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.status(200).json(vehicule);
    })
    .catch((error) => res.status(500).json({ error }));
};
