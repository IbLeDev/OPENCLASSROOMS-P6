import { supprimerTravail } from "./supprimerTravail.js";

export function travauxModale(table, gallery) {
  let image;
  let travail;
  let corbeille;

  table.forEach((element) => {
    image = document.createElement("img");
    image.classList.add("gallery__image");
    image.setAttribute("src", element.imageUrl);
    image.setAttribute("alt", element.title);

    travail = document.createElement("div");
    travail.classList.add("travail");

    corbeille = document.createElement("div");
    corbeille.classList.add("corbeille");
    corbeille.setAttribute("id", `${element.id}`);

    travail.appendChild(corbeille);
    travail.appendChild(image);

    gallery.appendChild(travail);
  });
  supprimerTravail();
}
