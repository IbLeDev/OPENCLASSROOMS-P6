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
    buttonAjouterPhoto.setAttribute("id", "buttonAjouterPhoto");
    buttonAjouterPhoto.setAttribute("name", "ajoutPhoto");
    buttonAjouterPhoto.setAttribute("type", "file");

    let labelAjouterPhoto = document.createElement("label");
    labelAjouterPhoto.setAttribute("id", "labelAjouterPhoto");
    labelAjouterPhoto.setAttribute("for", "buttonAjouterPhoto");
    labelAjouterPhoto.innerText = "+ Ajouter photo";

    let imageDisplay = document.createElement("img"); // Element to display the selected image
    imageDisplay.setAttribute("id", "imageDisplay");

    labelAjouterPhoto.appendChild(buttonAjouterPhoto);
    divPhoto.appendChild(labelAjouterPhoto);
    divPhoto.appendChild(imageDisplay); // Append the image display element to the DOM

    let maxMo = document.createElement("p");
    maxMo.innerText = "jpg, png : 4mo max";
    divPhoto.appendChild(maxMo);

    form.appendChild(divPhoto);

    buttonAjouterPhoto.addEventListener("change", function () {
      const file = this.files[0];
      let labelAjouterPhoto = document.querySelector("#labelAjouterPhoto");
      let maxMo = document.querySelector("#divPhoto p");
      let icone = document.querySelector(".fa-image");

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          imageDisplay.src = e.target.result; // Update the image display with the data URL
        };

        reader.readAsDataURL(file);
        labelAjouterPhoto.style.display = "none";
        maxMo.style.display = "none";
        icone.style.display = "none";
      } else {
        // Handle case where no file is selected
        imageDisplay.src = ""; // Clear the image display
      }
    });

    let labelTitre = document.createElement("label");
    labelTitre.setAttribute("for", "titre");
    labelTitre.innerText = "Titre";
    form.appendChild(labelTitre);

    let inputTitre = document.createElement("input");
    inputTitre.setAttribute("name", "titre");
    inputTitre.setAttribute("type", "text");
    form.appendChild(inputTitre);

    let labelCategorie = document.createElement("label");
    labelCategorie.setAttribute("for", "categories");
    labelCategorie.innerText = "Catégorie";
    form.appendChild(labelCategorie);

    let categorie = document.createElement("select");
    categorie.setAttribute("name", "categories");

    let option = document.createElement("option");
    option.setAttribute("value", "");
    option.innerText = " ";
    categorie.appendChild(option);

    option.setAttribute("value", "1");
    option.innerText = "Objets";
    categorie.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "2");
    option.innerText = "Appartements";
    categorie.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "3");
    option.innerText = "Hotels & restaurants";
    categorie.appendChild(option);



    form.appendChild(categorie);

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
