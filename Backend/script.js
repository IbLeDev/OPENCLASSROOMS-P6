const buttonTous = document.querySelector("#tous");
const buttonObjet = document.querySelector("#objets");
const buttonAppartements = document.querySelector("#appartements");
const buttonHotels = document.querySelector("#hotels");

let selectedButton = document.querySelector(".button--selected");
let imageUrl;
let title;
let figure;
let image;
let figcaption;

const gallery = document.querySelector(".gallery");

async function afficher() {
  selectedButton.classList.remove("button--selected");
  buttonTous.classList.add("button--selected");
  let reponse = await fetch("http://localhost:5678/api/works");
  let travaux = await reponse.json();
  figures = document.querySelectorAll(".gallery > figure");
  figures.forEach((figure) => figure.remove());
  travaux.forEach((element) => {
    title = element.title;
    imageUrl = element.imageUrl;

    figure = document.createElement("figure");
    image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", title);
    figcaption = document.createElement("figcaption");
    figcaption.innerText = title;

    gallery.appendChild(figure);
    figure.appendChild(image);

    gallery.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
  });
}

async function objets() {
  let reponse = await fetch("http://localhost:5678/api/works");
  let travaux = await reponse.json();
  travaux = travaux.filter((e) => e.category.name === "Objets");
  selectedButton.classList.remove("button--selected");
  buttonObjet.classList.add("button--selected");
  selectedButton = document.querySelector(".button--selected");
  figures = document.querySelectorAll(".gallery > figure");
  figures.forEach((figure) => figure.remove());
  travaux.forEach((element) => {
    title = element.title;
    imageUrl = element.imageUrl;

    figure = document.createElement("figure");
    image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", title);
    figcaption = document.createElement("figcaption");
    figcaption.innerText = title;

    gallery.appendChild(figure);
    figure.appendChild(image);

    gallery.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
  });
}

async function hotels() {
  let reponse = await fetch("http://localhost:5678/api/works");
  let travaux = await reponse.json();
  travaux = travaux.filter((e) => e.category.name === "Hotels & restaurants");
  selectedButton.classList.remove("button--selected");
  buttonHotels.classList.add("button--selected");
  selectedButton = document.querySelector(".button--selected");
  figures = document.querySelectorAll(".gallery > figure");
  figures.forEach((figure) => figure.remove());
  travaux.forEach((element) => {
    title = element.title;
    imageUrl = element.imageUrl;

    figure = document.createElement("figure");
    image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", title);
    figcaption = document.createElement("figcaption");
    figcaption.innerText = title;

    gallery.appendChild(figure);
    figure.appendChild(image);

    gallery.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
  });
}

async function apparts() {
  let reponse = await fetch("http://localhost:5678/api/works");
  let travaux = await reponse.json();
  travaux = travaux.filter((e) => e.category.name === "Appartements");
  selectedButton.classList.remove("button--selected");
  buttonAppartements.classList.add("button--selected");
  selectedButton = document.querySelector(".button--selected");
  figures = document.querySelectorAll(".gallery > figure");
  figures.forEach((figure) => figure.remove());
  travaux.forEach((element) => {
    title = element.title;
    imageUrl = element.imageUrl;

    figure = document.createElement("figure");
    image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", title);
    figcaption = document.createElement("figcaption");
    figcaption.innerText = title;

    gallery.appendChild(figure);
    figure.appendChild(image);

    gallery.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
  });
}

buttonTous.addEventListener("click", afficher);
buttonObjet.addEventListener("click", objets);
buttonHotels.addEventListener("click", hotels);
buttonAppartements.addEventListener("click", apparts);

afficher();
