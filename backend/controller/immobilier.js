const Immobilier = require("../models/Immobilier");

exports.createImmobilier = async (req, res, next) => {
  try {
    const { titre, description, categorie, surface, localisation } = req.body;

    const nouveauImmobilier = new Immobilier({
      titre,
      description,
      categorie,
      surface,
      localisation,
    });

    await nouveauImmobilier.save();
    res.status(201).json({ message: "Bien immobilier créé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Une erreur est survenue lors de la création du bien immobilier.",
    });
  }
};
