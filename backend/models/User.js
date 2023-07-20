const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "L'adresse e-mail est obligatoire."],
      unique: true,
      validate: {
        validator: emailValidator.validate,
        message: (props) =>
          `${props.value} n'est pas une adresse e-mail valide.`,
      },
    },
    password: {
      type: String,
      required: [true, "Le mot de passe est obligatoire."],
    },
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est obligatoire."],
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
