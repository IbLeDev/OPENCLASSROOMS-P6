export function afficheTravaux(objet, emplacement) {
  let imageUrl;
  let title;
  let figure;
  let image;
  let figcaption;
  objet.forEach((element) => {
    title = element.title;
    imageUrl = element.imageUrl;

    figure = document.createElement("figure");
    image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", title);
    figcaption = document.createElement("figcaption");
    figcaption.innerText = title;

    emplacement.appendChild(figure);
    figure.appendChild(image);

    emplacement.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);
  });
}