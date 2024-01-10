import { quitterAjoutPhoto } from "./quitterAjoutPhoto.js";
import { quitterModale } from "./quitterModale.js";
import { ajouterTravail } from "./ajouterTravail.js";

export function ouvrirAjoutPhoto() {
  let j = document.querySelector("#ajoutPhoto");

  if (j == undefined) {
    let body = document.querySelector("body");
    let ajoutPhoto = document.createElement("div");
    ajoutPhoto.setAttribute("id", "ajoutPhoto");
    body.appendChild(ajoutPhoto);

    let buttonRetourModale = document.createElement("button");
    buttonRetourModale.setAttribute("id", "retourModale");
    buttonRetourModale.classList.add("fa-solid");
    buttonRetourModale.classList.add("fa-arrow-left");
    buttonRetourModale.addEventListener("click", quitterAjoutPhoto);
    ajoutPhoto.appendChild(buttonRetourModale);

    let buttonQuitter = document.createElement("i");
    buttonQuitter.classList.add("fa-solid");
    buttonQuitter.classList.add("fa-xmark");
    buttonQuitter.addEventListener("click", quitterModale);
    buttonQuitter.addEventListener("click", quitterAjoutPhoto);
    ajoutPhoto.appendChild(buttonQuitter);

    let titreModale = document.createElement("h2");
    titreModale.setAttribute("id", "modale__title");
    titreModale.innerText = "Ajout photo";
    ajoutPhoto.appendChild(titreModale);

    let form = document.createElement("form");
    form.setAttribute("id", "formAjoutTravail");

    let divPhoto = document.createElement("div");
    divPhoto.setAttribute("id", "divPhoto");

    let icone = document.createElement("i");
    icone.classList.add("fa-regular");
    icone.classList.add("fa-image");
    icone.classList.add("fa-5x");
    divPhoto.appendChild(icone);

    let buttonAjouterPhoto = document.createElement("input");
    buttonAjouterPhoto.classList.add("button");
    buttonAjouterPhoto.setAttribute("id", "buttonAjouterPhoto");
    buttonAjouterPhoto.setAttribute("type", "file");
    buttonAjouterPhoto.innerText = "Ajouter photo";
    divPhoto.appendChild(buttonAjouterPhoto);

    let maxMo = document.createElement("p");
    maxMo.innerText = "jpg, png : 4mo max";
    divPhoto.appendChild(maxMo);

    form.appendChild(divPhoto);

    let labelTitre = document.createElement("label");
    labelTitre.setAttribute("for", "titre");
    labelTitre.innerText = "Titre";
    form.appendChild(labelTitre);

    let inputTitre = document.createElement("input");
    inputTitre.setAttribute("name", "titre");
    inputTitre.setAttribute("type", "text");
    inputTitre.classList.add("ajoutPhoto__input");
    form.appendChild(inputTitre);

    let labelCategorie = document.createElement("label");
    labelCategorie.setAttribute("for", "categorie");
    labelCategorie.innerText = "Catégorie";
    form.appendChild(labelCategorie);

    let inputCategorie = document.createElement("input");
    inputCategorie.setAttribute("name", "categorie");
    inputCategorie.setAttribute("type", "number");
    inputCategorie.classList.add("ajoutPhoto__input");
    form.appendChild(inputCategorie);

    let ligne = document.createElement("div");
    ligne.setAttribute("id", "modale__ligne");
    form.appendChild(ligne);

    let valider = document.createElement("input");
    valider.classList.add("button");
    valider.setAttribute("type", "submit");
    valider.setAttribute("value", "VALIDER");
    form.appendChild(valider);

    ajoutPhoto.appendChild(form);
  }
  ajouterTravail();
}
