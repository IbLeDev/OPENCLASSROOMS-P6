import { quitterModale } from "./quitterModale.js";
import { afficherModale } from "./afficherModale.js";

export function supprimerTravail() {
  const corbeilles = document.querySelectorAll(".corbeille");
  corbeilles.forEach(function (corbeille) {
    let corbeilleId = corbeille.id;
    corbeille.addEventListener("click", async function (event) {
      event.preventDefault();
      console.log(corbeilleId);
      await fetch("http://localhost:5678/api/works/" + `${corbeille.id}`, {
        method: "DELETE",
        headers: { "Authorization": "Bearer " + `${localStorage.token}` },
      });
    });
  });
}
