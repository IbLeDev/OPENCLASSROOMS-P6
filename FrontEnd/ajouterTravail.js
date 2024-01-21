import { afficheTravaux } from "./afficheTravaux.js";
import { removeAllChild } from "./removeAllChild.js";
import { recupererTravauxJSON } from "./recupererTravauxJSON.js";

export function ajouterTravail() {
  const form = document.querySelector("#formAjoutTravail");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const gallery = document.querySelector(".gallery");

    const imageInput = event.target.querySelector("#buttonAjouterPhoto");
    const titre = event.target.querySelector("[name=titre]").value;
    const categorie = event.target.querySelector("[name=categories]").value;
    console.log(categorie);

    const formData = new FormData();

    formData.append("image", imageInput.files[0]);
    formData.append("title", titre);
    formData.append("category", categorie);

    try {
      const reponse = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + `${localStorage.token}`,
        },
        body: formData,
      });
      alert("Post ajouté !");
      removeAllChild(gallery);
      const travaux = await recupererTravauxJSON();
      afficheTravaux(travaux, gallery);
    } catch (error) {
      alert("Erreur :(");
    }
  });
}
