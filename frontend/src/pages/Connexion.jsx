import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");

    const userData = {
      email: email,
      password: password,
    };

    fetch("https://leboncoin-xi.vercel.app/api/auth/login", {
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
        } else if (response.status === 401) {
          throw new Error("Email ou mot de passe incorrect");
        } else {
          throw new Error("Erreur lors de la connexion");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        window.location.href = "/";
      })
      .catch((error) => {
        setIsSubmitting(false);
        setErrorMessage(error.message);
      });
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Veuillez entrer une adresse e-mail");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Veuillez entrer un mot de passe");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
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
              onBlur={validatePassword}
              required
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="BtnSeConnecter"
          >
            Se connecter
          </button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
        <p>
          Pas encore inscrit ?{" "}
          <a href="/Inscription">Pour vous inscrire, cliquez ici</a>
        </p>
      </div>
    </div>
  );
};

export default Connexion;
