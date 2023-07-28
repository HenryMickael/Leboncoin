import React, { useState } from "react";
import Navbar from "../components/Navbar";
import emailValidator from "email-validator";

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setUsernameError("");
    setErrorMessage("");

    if (!emailValidator.validate(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide");
      setIsSubmitting(false);
      return;
    }

    if (password.length < 6) {
      setPasswordError("Le mot de passe doit contenir au moins 6 caractères");
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Les mots de passe ne correspondent pas");
      setIsSubmitting(false);
      return;
    }

    if (!username) {
      setUsernameError("Veuillez entrer un nom d'utilisateur");
      setIsSubmitting(false);
      return;
    }

    const userData = {
      email: email,
      password: password,
      username: username,
    };

    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        setIsSubmitting(false);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erreur lors de l'inscription");
        }
      })
      .then((data) => {
        if (data.token && data.userId) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          setIsAccountCreated(true);
        } else {
          throw new Error("Erreur lors de l'inscription");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Inscription</h1>
        {isAccountCreated && (
          <div className="success">Compte créé avec succès !</div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPasswordError && (
              <div className="error">{confirmPasswordError}</div>
            )}
          </div>
          <div>
            <label htmlFor="username">Nom d'utilisateur:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {usernameError && <div className="error">{usernameError}</div>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            S'inscrire
          </button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Inscription;
