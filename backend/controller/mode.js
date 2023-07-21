const Mode = require("../models/Mode");

exports.createMode = async (req, res, next) => {
  try {
    const { titre, description, categorie, taille, couleur } = req.body;

    const nouveauMode = new Mode({
      titre,
      description,
      categorie,
      taille,
      couleur,
    });

    await nouveauMode.save();
    res.status(201).json({ message: "Mode créé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la création du mode.",
    });
  }
};
