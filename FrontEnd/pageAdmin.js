import { afficherModale } from "./afficherModale.js";

export function pageAdmin() {
  let boutonModifier = document.createElement("button");
  boutonModifier.setAttribute("id", "bouton--modification");
  boutonModifier.innerHTML = "Modifier";
  let portfolio = document.querySelector("#portfolio");
  portfolio.appendChild(boutonModifier);
  boutonModifier.addEventListener("click", afficherModale);
}
