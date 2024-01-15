import { quitterModale } from "./quitterModale.js";
import { ouvrirAjoutPhoto } from "./ouvrirAjoutPhoto.js";
import { travauxModale } from "./travauxModale.js";
import { recupererTravauxJSON } from "./recupererTravauxJSON.js";
import { supprimerTravail } from "./supprimerTravail.js";
import { quitterAjoutPhoto } from "./quitterAjoutPhoto.js";

export async function afficherModale() {
  let i = document.querySelector("#modale");

  if (i == undefined) {
    let body = document.querySelector("body");
    let modale = document.createElement("div");
    modale.setAttribute("id", "modale");

    let buttonQuitterModale = document.createElement("i");
    buttonQuitterModale.classList.add("fa-solid");
    buttonQuitterModale.classList.add("fa-xmark");
    modale.appendChild(buttonQuitterModale);
    buttonQuitterModale.addEventListener("click", quitterModale);

    let titreModale = document.createElement("h2");
    titreModale.setAttribute("id", "modale__title");
    titreModale.innerText = "Galerie photo";
    modale.appendChild(titreModale);

    let galerieModale = document.createElement("div");
    galerieModale.setAttribute("id", "modale__gallery");
    modale.appendChild(galerieModale);

    let travaux = await recupererTravauxJSON();
    travauxModale(travaux, galerieModale);

    let ligne = document.createElement("div");
    ligne.setAttribute("id", "modale__ligne");
    modale.appendChild(ligne);

    let buttonAjouterPhoto = document.createElement("button");
    buttonAjouterPhoto.setAttribute("id", "modale__button");
    buttonAjouterPhoto.innerText = "Ajouter une photo";
    modale.appendChild(buttonAjouterPhoto);
    buttonAjouterPhoto.addEventListener("click", ouvrirAjoutPhoto);

    let gris = document.createElement("div");
    gris.setAttribute("id", "gris");
    gris.addEventListener("click", quitterAjoutPhoto);
    gris.addEventListener("click", quitterModale);
    body.appendChild(gris);

    body.appendChild(modale);
    supprimerTravail();
  }
}
