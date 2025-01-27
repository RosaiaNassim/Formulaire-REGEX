document.getElementById("regexForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const nom = document.getElementById("nom").value;
  const nomError = document.getElementById("nomError");
  if (!/^[a-zA-ZÀ-ÿ-]+$/.test(nom)) {
    nomError.textContent = "Le nom doit contenir uniquement des lettres.";
    isValid = false;
  } else {
    nomError.textContent = "";
  }

  const prenom = document.getElementById("prenom").value;
  const prenomError = document.getElementById("prenomError");
  if (!/^[a-zA-ZÀ-ÿ-]+$/.test(prenom)) {
    prenomError.textContent = "Le prénom doit contenir uniquement des lettres.";
    isValid = false;
  } else {
    prenomError.textContent = "";
  }

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    emailError.textContent = "L'email est invalide.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const adresse = document.getElementById("adresse").value;
  const adresseError = document.getElementById("adresseError");
  if (adresse.trim() === "") {
    adresseError.textContent = "L'adresse est requise.";
    isValid = false;
  } else {
    adresseError.textContent = "";
  }

  const mdp = document.getElementById("mdp").value;
  const mdpError = document.getElementById("mdpError");
  if (mdp.length < 8 || !/[A-Z]/.test(mdp) || !/[0-9]/.test(mdp)) {
    mdp.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.";
    isValid = false;
  } else {
    mdpError.textContent = "";
  }

  if (isValid) {
    alert("Formulaire soumis avec succès");
  }
});
