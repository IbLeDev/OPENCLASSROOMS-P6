export function ouvrirAjoutPhoto() {
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

  
}
