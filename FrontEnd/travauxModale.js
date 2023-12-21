export function travauxModale(table, gallery) {
  let image;
  let travail;
  let corbeille;

  console.log(table);

  table.forEach((element) => {
    image = document.createElement("img");
    image.classList.add("gallery__image")
    image.setAttribute("src", element.imageUrl);
    image.setAttribute("alt", element.title);

    travail = document.createElement("div");
    travail.classList.add("travail")

    corbeille = document.createElement("div");
    corbeille.classList.add("corbeille");

    travail.appendChild(image);
    travail.appendChild(corbeille);

    gallery.appendChild(travail);
  });
}
