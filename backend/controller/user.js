const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// SIGNUP
exports.signup = async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const existingUserWithEmail = await User.findOne({ email: email });
    if (existingUserWithEmail) {
      return res
        .status(409)
        .json({ message: "L'adresse e-mail existe déjà !" });
    }
    const existingUserWithUsername = await User.findOne({ username: username });
    if (existingUserWithUsername) {
      return res
        .status(409)
        .json({ message: "Le nom d'utilisateur existe déjà !" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email,
      password: hash,
      username: username,
    });

    await newUser.save();
    res.status(201).json({ message: "Utilisateur créé !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la création de l'utilisateur.",
    });
  }
};

// LOGIN
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Adresse e-mail ou mot de passe incorrect." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Adresse e-mail ou mot de passe incorrect." });
    }

    const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "24h",
    });

    res.status(200).json({
      userId: user._id,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Une erreur est survenue lors de la connexion." });
  }
};
