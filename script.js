const form = document.querySelector("form");
const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const emailInput = document.querySelector("#email");
const adresseInput = document.querySelector("#adresse");
const motdepasseInput = document.querySelector("#motdepasse");

function verifierEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

function verifierMotdepasse(motdepasse) {
    const regexMotdepasse =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regexMotdepasse.test(motdepasse);
}

function soumettreFormulaire(event) {
  event.preventDefault();

  const nom = nomInput.value;
  const prenom = prenomInput.value;
  const email = emailInput.value;
  const adresse = adresseInput.value;
  const motdepasse = motdepasseInput.value;

  if (
      nom === "" ||
      prenom === "" ||
      email === "" ||
      adresse === "" ||
      motdepasse === ""
  ) {
      alert("Veuillez remplir tous les champs");
      return;
  }

  if (!verifierEmail(email)) {
      alert("Adresse e-mail invalide");
      return;
  }

  if (!verifierMotdepasse(motdepasse)) {
      alert(
          "Mot de passe invalide. Il doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial",
      );
      return;
  }

  fetch("https://67974380c2c861de0c6c097e.mockapi.io/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          nom: nom,
          prenom: prenom,
          email: email,
          adresse: adresse,
          motdepasse: motdepasse,
      }),
  })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
}
form.addEventListener("submit", soumettreFormulaire);