import { afficherModale } from "./afficherModale.js";
import { logout } from "./logout.js";

export function pageAdmin() {
  let boutonModifier = document.createElement("button");
  boutonModifier.setAttribute("id", "bouton--modification");
  boutonModifier.innerHTML = "Modifier";
  let portfolio = document.querySelector("#portfolio");
  portfolio.appendChild(boutonModifier);
  boutonModifier.addEventListener("click", afficherModale);
  let out = document.querySelector("nav a");
  out.innerHTML = "logout";
  out.setAttribute("href", "#");
  out.addEventListener("click", logout);
}
