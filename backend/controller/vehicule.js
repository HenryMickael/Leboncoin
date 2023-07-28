const Vehicule = require("../models/Vehicule");
const fs = require("fs");

exports.createVehicule = async (req, res, next) => {
  try {
    const {
      userId,
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
      imageUrl,
    } = req.body;

    const nouveauVehicule = new Vehicule({
      userId,
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
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });

    await nouveauVehicule.save();
    res.status(201).json({
      message: "Véhicule créé avec succès.",
      vehicule: nouveauVehicule,
    });
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
// Delete
// exports.deleteVehicule = (req, res, next) => {
//   Vehicule.findOne({ _id: req.params.id })
//     .then((vehicule) => {
//       if (vehicule.imageUrl) {
//         const filename = vehicule.imageUrl.split("/images/")[1];
//         fs.unlink(`images/${filename}`, () => {
//           Vehicule.deleteOne({ _id: req.params.id })
//             .then(() => res.status(200).json({ message: "Annonce supprimé !" }))
//             .catch((error) => res.status(400).json({ error }));
//         });
//       } else {
//         Vehicule.deleteOne({ _id: req.params.id })
//           .then(() => res.status(200).json({ message: "Annonce supprimé !" }))
//           .catch((error) => res.status(400).json({ error }));
//       }
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
