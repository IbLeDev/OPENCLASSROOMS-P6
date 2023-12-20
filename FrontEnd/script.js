import { recupererTravauxJSON } from "./recupererTravauxJSON.js";
import { afficheTravaux } from "./afficheTravaux.js";
import { removeAllChild } from "./removeAllChild.js";

let travaux = await recupererTravauxJSON();

const buttonTous = document.querySelector("#tous");
const buttonObjets = document.querySelector("#objets");
const buttonAppartements = document.querySelector("#appartements");
const buttonHotels = document.querySelector("#hotels");

let selectedButton = document.querySelector(".button--selected");

const gallery = document.querySelector(".gallery");

async function afficherTous() {
  selectedButton.classList.remove("button--selected");
  buttonTous.classList.add("button--selected");
  selectedButton = buttonTous;
  removeAllChild(gallery);
  afficheTravaux(travaux, gallery);
  console.log("click");
}
await afficherTous();

async function afficherObjets() {
  selectedButton.classList.remove("button--selected");
  buttonObjets.classList.add("button--selected");
  selectedButton = buttonObjets;
  removeAllChild(gallery);
  afficheTravaux(travaux.filter(e => e.category.name === "Objets"), gallery);
  console.log("click");
}

async function afficherAppartements() {
  selectedButton.classList.remove("button--selected");
  buttonAppartements.classList.add("button--selected");
  selectedButton = buttonAppartements;
  removeAllChild(gallery);
  afficheTravaux(travaux.filter(e => e.category.name === "Appartements"), gallery);
  console.log("click");
}

async function afficherHotels() {
  selectedButton.classList.remove("button--selected");
  buttonHotels.classList.add("button--selected");
  selectedButton = buttonHotels;
  removeAllChild(gallery);
  afficheTravaux(travaux.filter(e => e.category.name === "Hotels & restaurants"), gallery);
  console.log("click");
}



buttonTous.addEventListener("click", afficherTous);
buttonObjets.addEventListener("click", afficherObjets);
buttonAppartements.addEventListener("click", afficherAppartements);
buttonHotels.addEventListener("click", afficherHotels);

console.log(travaux);