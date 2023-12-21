import { quitterModale } from "./quitterModale.js";
import { ouvrirAjoutPhoto } from "./ouvrirAjoutPhoto.js";
import { travauxModale } from "./travauxModale.js";
import { recupererTravauxJSON } from "./recupererTravauxJSON.js";

export async function afficherModale() {
  let i = document.querySelector("#modale");

  if (i == undefined) {
    let body = document.querySelector("body");
    let modale = document.createElement("div");
    modale.setAttribute("id", "modale");
    body.appendChild(modale);

    let buttonQuitterModale = document.createElement("button");
    buttonQuitterModale.setAttribute("id", "modale__quitter");
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
    buttonAjouterPhoto.addEventListener("click", ouvrirAjoutPhoto);
    modale.appendChild(buttonAjouterPhoto);
  }
}